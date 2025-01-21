import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const Contact = () => {
  const {
    register,
    trigger, //validation
    formState: { errors }, //errors
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-32 w-5/6 mx-auto md:h-full">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={fadeInLeft}
      >
        <div>
          <p className="font-caveat font-semibold text-5xl md:text-6xl mb-12">
            CONTACT <span className="text-cyan">ME</span>
          </p>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16  items-center">
        <motion.div
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            y: [0, 20, 0], // Moves up and down
            transition: { duration: 2, repeat: Infinity, repeatType: "loop" }, // Infinite loop
          }}
          className="basis-1/2 flex justify-center"
        >
          <img
            src="../assets/images/contact-image.svg"
            alt="contact"
            className="w-[500px] h-[500px] "
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-10 "
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/00cd832323bc71d64dcc0ec4aacf6a61"
            method="POST"
          >
            <input
              className="w-full bg-transparent font-semibold border-2 border-red rounded-2xl placeholder-white/60 p-3 hover:border hover:border-brightBlue"
              type="text"
              placeholder="NAME"
              {...register("name", {
                //register is from react hook form
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && ( // if there is error
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className=" w-full border-2 border-red bg-transparent font-semibold placeholder-white/60 rounded-2xl p-3 mt-5 hover:border hover:border-brightBlue"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full border-2 border-red bg-transparent font-semibold placeholder-white/60 rounded-2xl p-3 hover:border hover:border-brightBlue mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-4 bg-cyan font-semibold rounded-2xl text-white mt-5 hover:bg-brightBlue transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
