export type FormProps = {
  id: string;
  type: "email" | "text" | "password" | "number";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
};

export const ProfileForm: FormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "User name",
    name: "username",
    type: "text",
  },

  {
    id: "2",
    inputType: "textarea",
    placeholder: "About me",
    name: "aboutMe",
    type: "text",
  },
];
