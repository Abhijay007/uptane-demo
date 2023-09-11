
import { FaStar} from 'react-icons/fa';
import {AiOutlineDeploymentUnit} from "react-icons/ai"; 
import {GoVersions} from 'react-icons/go';
import {GrDocumentUpdate} from "react-icons/gr";

const projects = [
    {
        title: "UPTANE STANDARD",
        icon: GoVersions,
        description: "Short Description about Uptane Standard",
        link: "docs/Standard/latest",
    },
    {
        title: "DEPLOYMENT BEST PRACTICES",
        icon: AiOutlineDeploymentUnit,
        description: "Short Description about Deployment Best Practices.",
        link: "#",
    },
    {
        title: "POUFs",
        icon: FaStar,
        description: "Open source standard for runtime security for hosts",
        link: "docs/Enhancements/POUF/PoufMain",
    },
    {
        title: "PUREs",
        icon: GrDocumentUpdate,
        description: "Short Description about Deployment Best PUREs.",
        link: "docs/Enhancements/PUREs/pure1",
    },
];


export default { projects };