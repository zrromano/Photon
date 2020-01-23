import React from "react";
import Form from "./common/form";
import Spinner from "./common/spinner";
import Images from "./common/images";
import Buttons from "./common/button";
import { addPictures } from "../services/pictureService";

class ImageUploadForm extends Form {
  state = {
    uploading: false,
    images: []
  };

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    const images = addPictures(formData);
    this.setState({
      uploading: false,
      images
    });
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  };

  render() {
    const { uploading, images } = this.state;
    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}

export default ImageUploadForm;
