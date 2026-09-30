"use client";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
export default function ContactPage() {
  const text = "Say Hello";
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loadingToast = toast.loading("Sending your message 🔃");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gmail: formData.get("gmail"),
          description: formData.get("description"),
        }),
      });
      if (!response.ok) {
        toast.dismiss(loadingToast);
        toast.error("Internal Server Error");
        return;
      }
      const data = await response.json();
      if (!data.success) {
        toast.dismiss(loadingToast);
        toast.error(data.message);
      }
      toast.dismiss(loadingToast);
      toast.success(data.message);
      event.target.reset();
    } catch (error) {
      console.log("Error : ", error);
      toast.dismiss(loadingToast);
      toast.error("Internel Server Error");
    }
  };
  return (
    <>
      <ToastContainer />
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
          <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
            <div>
              {text.split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    delay: index * 0.1,
                    repeat: Infinity,
                  }}
                >
                  {item}
                </motion.span>
              ))}
              😊
            </div>
          </div>
          <form
            onSubmit={(e) => onSubmitHandler(e)}
            className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          >
            <span>Dear, Sibghatullah Ansari</span>

            <textarea
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none min-h-[200px] p-2"
              placeholder="Write your message here..."
              name="description"
              required
            />
            <span>My Email Address is :</span>
            <input
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none p-2"
              placeholder="Enter your Email here..."
              name="gmail"
              required
            />
            <span>Regard</span>
            <button
              type="submit"
              className="cursor-pointer bg-purple-200 rounded font-semibold text-gray-600 p-4"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
