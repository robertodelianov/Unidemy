import Link from "next/link";

import classes from "../../styles/css/preview-button.module.css";

const PreviewButton = (props) => {
  return (
    <Link href={`/books/${props.id}`}>
      <button type="button" className={classes["preview-button"]}>
        Preview
      </button>
    </Link>
  );
};

export default PreviewButton;
