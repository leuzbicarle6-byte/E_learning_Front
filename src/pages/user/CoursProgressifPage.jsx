import { useOutletContext } from "react-router-dom";
import CoursProgressif from "../../components/courses/cour/CoursProgressif";

export default function CoursProgressifPage() {
  const { coursesArray } = useOutletContext();

  return <CoursProgressif coursesArray={coursesArray} />;
}
