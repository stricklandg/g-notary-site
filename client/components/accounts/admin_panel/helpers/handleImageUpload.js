/**
 * Created by gregorydrake on 10/3/16.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Meteor} from 'meteor/meteor';
import { connect } from 'react-redux';
import {passPdf} from '../../../../events/actions/form_signed';

class ImageDropFormCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            uploadedFile: ''
        };
        this.onImageDrop = this.onImageDrop.bind(this);
    }

    onImageDrop (files, func) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0], function(dataURI) {

            var image = Meteor.callPromise('processUploadedImage', dataURI);
            image.then((imageFinal) =>
                func(imageFinal));

        });
    }

    handleImageUpload(file, callback) {
        var image = new Image();
        image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;

            canvas.getContext('2d').drawImage(this, 0, 0);

            callback(canvas.toDataURL('image/png'));
        };
        image.src = file.preview;

    }

    render() {
        return (
            <div>
                <Dropzone multiple={false} accept="image/*" onDrop={(value) => this.onImageDrop(value, this.props.passPdf)}><p>Drop an image or click to select a file to upload.</p></Dropzone>
                {this.state.uploadedFile === '' ? null : <div><img ref="uploadedImage" src={this.state.uploadedFile.preview} style={{width: 500}} /><p>{this.state.uploadedFile.name}</p></div>}
            </div>
        )
    }
}


export default ImageDropForm = connect(null, {passPdf})(ImageDropFormCom);


/*
 onImageDrop (files) {
 this.setState({
 uploadedFile: files[0]
 });

 this.handleImageUpload(files[0], function(dataURI) {

 var image = Meteor.callPromise('processUploadedImage', dataURI);
 image.then((imageFinal) =>
 this.props.passPdf(imageFinal));

 });
 }

 handleImageUpload(file, callback) {
 console.log(file);
 var image = new Image();
 image.onload = function() {
 var canvas = document.createElement('canvas');
 canvas.width = this.naturalWidth;
 canvas.height = this.naturalHeight;

 canvas.getContext('2d').drawImage(this, 0, 0);

 callback(canvas.toDataURL('image/png'));
 };
 image.src = file.preview;

 }
 */