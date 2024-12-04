import { FaLinkedin,  FaGithub, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FollowMe() {
  return (
    <section>
      <div className="mx-auto max-w-sm mt-20 border-4 border-[#DAC5AC] shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 p-4 md:p-10 flex flex-col items-center justify-center text-center">
        <p className="text-[#DAC5AC] text-xl md:text-2xl font-bold border-b-4 border-[#DAC5AC]">
          Follow Me On
        </p>

        <ul className="flex flex-row items-center justify-center text-center mt-5">
          <li className="mx-2">
            <a
              href="https://www.linkedin.com/in/devanshcpp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaLinkedin size={32} />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://x.com/Devansh_py?t=hnev9vQEiEw1sH9crMUm2A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaXTwitter size={32} />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://github.com/devansh-cpp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaGithub size={32} />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.instagram.com/devansh.java/profilecard/?igsh=MW5odXB5aGI3M3ZkMw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaInstagram size={32} />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://discord.gg/PRRf5Kaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaDiscord size={32} />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://youtube.com/@madhavaseducation?feature=shared "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#DAC5AC] hover:text-indigo-300"
            >
              <FaYoutube size={32} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FollowMe;
