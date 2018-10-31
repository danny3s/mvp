import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'parallax';

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
          { "title": "Profile", "theme": "layout2" },

        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };


    // PARALLAX - Profile data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "Profile",
            "headerImage": "assets/images/background/13.jpg",
            "avatar": "assets/images/avatar/14.jpg",
            "title": "Jessica White",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "items": [
                {
                    "id": 1,
                    "avatar": "assets/images/avatar/16.jpg",
                    "title": "Tom Adams",
                    "subtitle": "@tom",
                    "button": "Follow"
                },
                {
                    "id": 2,
                    "avatar": "assets/images/avatar/17.jpg",
                    "title": "Logan Rogers",
                    "subtitle": "@logan",
                    "button": "Follow"
                },
                {
                    "id": 3,
                    "avatar": "assets/images/avatar/18.jpg",
                    "title": "Gary Russell",
                    "subtitle": "@gary",
                    "button": "Follow"
                },
                {
                    "id": 4,
                    "avatar": "assets/images/avatar/19.jpg",
                    "title": "Amy Lee",
                    "subtitle": "@amy",
                    "button": "Follow"
                },
                {
                    "id": 5,
                    "avatar": "assets/images/avatar/20.jpg",
                    "title": "Silvia Salvador",
                    "subtitle": "@silvia",
                    "button": "Follow"
                },
                {
                    "id": 6,
                    "avatar": "assets/images/avatar/15.jpg",
                    "title": "Alexandra Parker",
                    "subtitle": "@alexandra",
                    "button": "Follow"
                },
                {
                    "id": 7,
                    "avatar": "assets/images/avatar/22.jpg",
                    "title": "Gabriel Mascareñas",
                    "subtitle": "@gabriel",
                    "button": "Follow"
                },
                {
                    "id": 8,
                    "avatar": "assets/images/avatar/14.jpg",
                    "title": "Sofia Clarke",
                    "subtitle": "@stephen",
                    "button": "Follow"
                },
                {
                    "id": 9,
                    "avatar": "assets/images/avatar/21.jpg",
                    "title": "Lisa Green",
                    "subtitle": "@lisa",
                    "button": "Follow"
                },
                {
                    "id": 10,
                    "avatar": "assets/images/avatar/23.jpg",
                    "title": "Danijel Bilic",
                    "subtitle": "@danijel",
                    "button": "Follow"
                }
            ]
        };
    };


    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onProceed': function (item: any) {
                  that.toastCtrl.presentToast("onProceed");
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('parallax/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
