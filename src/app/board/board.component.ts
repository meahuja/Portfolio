import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../social_links.json';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  loadedFeature='home';
  resume_link : string;
  facebook_link : string;
  instagram_link : string;
  github_link : string;
  linkedin_link : string;

  constructor() { }

  ngOnInit(): void {

    this.resume_link=jsonData.resume;
    this.facebook_link=jsonData.social.facebook;
    this.instagram_link=jsonData.social.instagram;
    this.github_link=jsonData.social.github;
    this.linkedin_link=jsonData.social.linkedin;

  }

  onNavigate(feature){
    this.loadedFeature=feature;
  }

}
