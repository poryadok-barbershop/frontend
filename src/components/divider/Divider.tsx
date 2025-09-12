import { SIcon } from "@/assets/icons";

import st from './Divider.module.scss'

export const Divider = ({className}: {className?: string}) => {
  return (
    <div className={st.divider}>
      <hr className={`${st.line} ${className}`} />
      <SIcon className={`${st.center} ${className}`} />
      <hr className={`${st.line} ${className}`} />
    </div>
  );
};
