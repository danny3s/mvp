import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { IService } from '../../services/IService';

@IonicPage()
@Component({
    templateUrl: 'item-details-image-gallery.html',
    providers: [HomeService]
})
export class ItemDetailsPageImageGallery {

    page: any;
    service2: IService;
    params: any = {};

    data:any = {};



    constructor(public navCtrl: NavController, navParams: NavParams,public service:HomeService) {

        service.load().subscribe(snapshot => {
            this.data = snapshot;
          });

        // If we navigated to this page, we will have an item available as a nav param
        this.params.data = {
            
            "items": [
                {
                    "id": 1,
                    "title": "Latin America",
                    "image": "assets/images/gallery/full-gallery-content-1/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-1/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-1/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-1/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-1/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-1/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Europe",
                    "image": "assets/images/gallery/full-gallery-content-2/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-2/2.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-2/4.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-2/6.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-2/1.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Asia",
                    "image": "assets/images/gallery/full-gallery-content-3/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-3/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-3/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-3/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-3/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-3/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-3/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-3/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-3/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-3/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-3/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-3/11.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-3/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-3/13.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-3/14.jpg"
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Oceania",
                    "image": "assets/images/gallery/full-gallery-content-4/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-4/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-4/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-4/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-4/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-4/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-4/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-4/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-4/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-4/9.jpg"
                        }
                    ]
                },
                {
                    "id": 5,
                    "title": "North America",
                    "image": "assets/images/gallery/full-gallery-content-5/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-5/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-5/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-5/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                        }
                    ]
                },
                {
                    "id": 6,
                    "title": "Africa",
                    "image": "assets/images/gallery/full-gallery-content-6/0.jpg",
                    "favorite": true,
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-6/7.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-6/8.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-6/9.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                        },
                        {
                            "id": 17,
                            "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                        }
                    ]
                },
              
                
            ]

    
        }
    }
}
