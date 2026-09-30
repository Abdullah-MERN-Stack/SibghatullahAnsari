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

      toast.dismiss(loadingToast);

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      event.target.reset();
    } catch (error) {
      console.log("Error:", error);
      toast.dismiss(loadingToast);
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <ToastContainer />

      <motion.div
        className="min-h-screen w-full"
        initial={{ y: "-100vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div
          className="
            min-h-screen w-full flex flex-col lg:flex-row gap-8 lg:gap-12 px-5 py-8
            sm:px-8 sm:py-12
            md:px-12 md:py-16
            lg:px-16 lg:py-20
            xl:px-24 xl:py-24
            2xl:px-40
          "
        >
          {/* Left Section */}
          <div
            className="
              w-full lg:w-1/2
              min-h-[220px] lg:min-h-0
              flex items-center justify-center
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              font-semibold
            "
          >
            <div className="text-center">
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

              <span className="ml-2">😊</span>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={onSubmitHandler}
            className="
              w-full lg:w-1/2
              bg-red-50
              rounded-xl
              text-base sm:text-lg md:text-xl
              flex flex-col
              gap-5 sm:gap-6 md:gap-8
              justify-center
              p-6
              sm:p-8
              md:p-10
              lg:p-12
              xl:p-16
            "
          >
            <span className="font-medium">Dear, Sibghatullah Ansari</span>

            <textarea
              rows={6}
              className="
                w-full
                bg-transparent
                border-b-2 border-b-black
                outline-none
                resize-none
                min-h-[150px]
                sm:min-h-[170px]
                md:min-h-[200px]
                p-2
                placeholder:text-gray-500
              "
              placeholder="Write your message here..."
              name="description"
              required
            />

            <span className="font-medium">My Email Address is:</span>

            <input
              type="email"
              className="
                w-full
                bg-transparent
                border-b-2 border-b-black
                outline-none
                p-2
                placeholder:text-gray-500
              "
              placeholder="Enter your Email here..."
              name="gmail"
              required
            />

            <span className="font-medium">Regard</span>

            <button
              type="submit"
              className="
                w-full
                cursor-pointer
                bg-purple-200
                hover:bg-purple-300
                active:bg-purple-400
                rounded-lg
                font-semibold
                text-gray-700
                p-3 sm:p-4
                transition-colors
              "
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
