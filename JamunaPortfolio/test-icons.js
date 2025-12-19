const {
    SiC, SiPython, SiDart, SiFlutter, SiJavascript, SiNodedotjs, SiExpress, SiFlask,
    SiMongodb, SiMysql, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
    SiVisualstudiocode, SiPostman, SiGit, SiLeetcode
} = require("react-icons/si");
const { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDna, FaGithub, FaGitAlt, FaLinkedin, FaPhone } = require("react-icons/fa");
const { GiBrain } = require("react-icons/gi");
const { HiMail } = require("react-icons/hi");

const icons = {
    SiC, SiPython, SiDart, SiFlutter, SiJavascript, SiNodedotjs, SiExpress, SiFlask,
    SiMongodb, SiMysql, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
    SiVisualstudiocode, SiPostman, SiGit, SiLeetcode,
    FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDna, FaGithub, FaGitAlt, FaLinkedin, FaPhone,
    GiBrain,
    HiMail
};

for (const [name, icon] of Object.entries(icons)) {
    console.log(`${name}: ${typeof icon}`);
    if (typeof icon !== 'function') {
        console.error(`ERROR: ${name} is not a function! It is ${typeof icon}`);
    }
}
