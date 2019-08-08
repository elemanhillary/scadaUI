import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upload } from '../../redux/actions';
import '../../css/input.module.css';

class MyDropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { file: {}, imagePreviewUrl: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    const { file } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.upload(file);
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files;
    reader.onloadend = () => {
      this.setState({
        file: file[0],
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file[0]);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    const { uploading, user, uploaded } = this.props;
    console.log(this.props);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl}
          alt="new"
          style={{
            margin: '0 auto', width: '50%', marginTop: '10px', borderRadius: '4px',
          }}
        />
      );
    }

    return (
      <>
        {
          uploading && (
            <div className="wrap">
              <div className="loading">
                <div className="bounceball" />
                <div className="text">Analyzing Image...</div>
              </div>
            </div>
          )
        }
        <div className="previewComponent">
          <form onSubmit={this.handleSubmit}>
            <input
              className="fileInput custom-file-input"
              type="file"
              name="image"
              onChange={this.handleImageChange}
            />
            <button type="submit">submit</button>
          </form>
          <div className="imgPreview">{$imagePreview}</div>
          {uploaded && (
          <div className="analysisResults">
            <span className="analysisTitle">Analyzed Picture and Possible Caption is:</span>
            <br />
            <span className="caption" style={{ color: '#a94645' }}>{user && user.caption}</span>
          </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const uploadd = state.upload;
  return uploadd;
};

const connectedUpload = connect(mapStateToProps, { upload })(MyDropzone);
export { connectedUpload as MyDropzone };
