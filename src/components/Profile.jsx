import { useAppState } from "@/context/AppStateProvider";
import PromptCard from "./PromptCard";

const MyProfile = ({ name, desc, data, handleEdit, handleDelete, deleteModal }) => {

  const { context } = useAppState();

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile {context}</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            deleteModal={deleteModal}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProfile;