import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  features = [
    {url : "../../assets/images/screen-recording.png",
    title : "Screen Recorder",
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{
    url : "../../assets/images/video-recording-icon.png",
    title : "Video Recorder",
    border:true,
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{
    url : "../../assets/images/video-editing.png",
    title : "Video Editor",
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{
    url : "../../assets/images/image-webcapture.png",
    title : "Screen & Web Capture",
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{
    url : "../../assets/images/image-editing.png",
    title : "Image Editor",
    border: true,
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{
    url : "../../assets/images/dual-audio-icon.png",
    title : "Dual Audio Editor",
    info : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
