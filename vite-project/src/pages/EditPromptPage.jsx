import { useParams } from "react-router-dom";
import EditPrompt from "../components/EditPrompt";

const EditPromptPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <EditPrompt id={id} />
    </div>
  );
};

export default EditPromptPage;
