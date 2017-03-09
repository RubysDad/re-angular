import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"
    documents: Document[] = [
        {
         title: "My First Document",
         description: 'SPDS',
         file_url: 'http://google.com',
         updated_at: '11/11/16',
         image_url: 'https://c1.staticflickr.com/4/3715/10489414535_3065f207e0_z.jpg',
        },
        {
         title: "My Second Document",
         description: 'Home Inspection',
         file_url: 'http://google.com',
         updated_at: '11/11/16',
         image_url: 'http://maxpixel.freegreatpicture.com/static/photo/1x/For-Sale-Estate-Sale-New-Home-Real-Estate-House-1689871.jpg',
        },
        {
         title: "My Third Document",
         description: 'Escrow',
         file_url: 'http://google.com',
         updated_at: '11/11/16',
         image_url: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Real-Estate-Landscape-For-Sale-Mortgage-New-Home-1540863.jpg',
        }
    ]
}