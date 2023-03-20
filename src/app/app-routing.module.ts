import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata/biodata.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: SkillsComponent },
  { path: 'biodata', component: BiodataComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'cert', component: CertificationsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
