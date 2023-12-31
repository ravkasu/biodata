import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: '', component: AppComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'cert', component: CertificationsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
