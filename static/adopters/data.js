import { MdDesignServices } from 'react-icons/md';
import { GrDocumentThreat } from 'react-icons/gr';
import { BsClockHistory } from 'react-icons/bs';
import { MdOutlinePublish } from 'react-icons/md';
import {TfiLayoutMediaOverlayAlt2} from 'react-icons/tfi';
import {SiMercadopago} from 'react-icons/si';

const projects = [
    {
        title: "Design",
        icon: MdDesignServices,
        description: "A thumbnail sketch of how Uptane works",
        link: "docs/LearnMore/design",
    },
    {
        title: "Threat Model",
        icon: GrDocumentThreat,
        description: "An overview of the range of threats Uptane can prevent or deflect.",
        link: "docs/LearnMore/threat",
    },
    {
        title: "History",
        icon: BsClockHistory,
        description: "Important milestones in the development of the Uptane project.",
        link: "docs/LearnMore/history",
    },
    {
        title: "Publications",
        icon: MdOutlinePublish,
        description: "Links to conference papers, journal articles and white papers.",
        link: "docs/LearnMore/publications",
    },
    {
        title: "Press",
        icon: TfiLayoutMediaOverlayAlt2,
        description: "Articles about Uptane in technical and general media",
        link: "docs/LearnMore/press",
    },
    {
        title: "Adoptions",
        icon: SiMercadopago,
        description: "list of Uptane adopters.",
        link: "docs/LearnMore/adoptions",
    },
];


export default { projects };