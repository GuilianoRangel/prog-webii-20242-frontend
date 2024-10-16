import {Component, OnInit} from '@angular/core';
import {ArchitectureService} from "./architecture/architecture.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit{
  title = 'ueg-prog-webii-20242-frontend-aula';
  constructor(private architectureService: ArchitectureService) {
  }

  ngOnInit(): void {
        this.architectureService.init();
    }
}
