import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-YellowPotato mx- 12 py-8">
      <div className="container mx-auto px-4">
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 flex justify-center">
          {/* Team Member 1 */}
          <div className="bg- rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>

            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-[#0f0f0f]-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-gray-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-black-600"
                />
              </a>
            </div>
            <div className="text-black font-lato">member one</div>
          </div>
          {/* Team Member 1 */}
          <div className="rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-gray-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-black-600"
                />
              </a>
            </div>
          </div>
          {/* Team Member 1 */}
          <div className="rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
            </div>
          </div>
          {/* Team Member 1 */}
          <div className="rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-black-600"
                />
              </a>
            </div>
          </div>
          {/* Team Member 1 */}
          <div className="rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
            </div>
          </div>
          {/* Team Member 1 */}
          <div className="rounded p-2 w-32">
            <div className="text-lg font-semibold text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 1"
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaGithub
                  style={{ fontSize: "30px" }}
                  className="text-black-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/member1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400"
              >
                <FaLinkedin
                  style={{ fontSize: "30px" }}
                  className="text-yellow-600"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-YellowPotato py-8">
        {/* Footer copyright content */}
        <p className="text-[#383838] text-center">
          &copy; {new Date().getFullYear()} Rotten Potato. All Rights Reserved.
        </p>
      </footer>
    </footer>
  )
}

export default Footer
