import React, {
    ChangeEvent,
    ChangeEventHandler,
    ReactEventHandler,
    useState,
  } from "react";
  import { AiOutlineLink } from "react-icons/ai";
  import { Button } from "../ui/button";
  import { Textarea } from "../ui/textarea";
  import { SubmitHandler, useForm } from "react-hook-form";
  
 
  type Inputs = {
    username: string;
    post: string;
    imageLink: string;
  };
  const CreatePost = ({
    username,
    profileLink,
  }: {
    username: string;
    profileLink: string;
  }) => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>();
    const [showLoggingInAlert, setShowLoggingInAlert] = useState(false);
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      setShowLoggingInAlert(true);
  
  
    };
  
    return (
      <div className="create-post flex flex-col mb-3">
        <div className="flex items-center space-x-3">
          <div className="rounded-full h-10 w-10 bg-red-50 overflow-hidden mb-2">
            <img src={profileLink} className=" bg-cover" />
          </div>
          <p className="text-xs">{username} </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex ">
            <Textarea
              placeholder="Write without Fear !"
              className="border-none h-8 bg-transparent shadow-none resize-none "
              {...register("post")}
            />
            <Button
              variant={"secondary"}
              className=" bg-transparent text-white "
              type="submit"
            >
              Post
            </Button>
          </div>
        </form>
        <AiOutlineLink
          className="text-gray-300 cursor-pointer"
          onClick={() => {}}
        />
        <br></br>
  
        <hr className="h-px" />
      </div>
    );
  };
  
  export default CreatePost;