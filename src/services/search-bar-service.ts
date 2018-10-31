 import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) {}

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Field + header 2", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };




    // SEARCH - Field + header 2 data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "Field + header 2",
            "title": "Search Friends",
            "headerImage": "assets/images/background/39.jpg",
            "items": [
                {
                    "id": 1,
                    "title": "Matthew Morris",
                    "subtitle": "@matthew",
                    "detail": "Berlin",
                    "avatar": "assets/images/avatar/22.jpg"
                },
                {
                    "id": 2,
                    "title": "Nick Evans",
                    "subtitle": "@nick",
                    "detail": "Casablanca",
                    "avatar": "assets/images/avatar/23.jpg"
                },
                {
                    "id": 3,
                    "title": "Abbie Wilson",
                    "subtitle": "@abbie453",
                    "detail": "Cape Town",
                    "avatar": "assets/images/avatar/24.jpg"
                },
                {
                    "id": 4,
                    "title": "Laura Sarabia",
                    "subtitle": "@laura",
                    "detail": "New Taipei City",
                    "avatar": "assets/images/avatar/19.jpg"
                },
                {
                    "id": 5,
                    "title": "Lizzie Rose",
                    "subtitle": "@lizzie",
                    "detail": "Jakarta",
                    "avatar": "assets/images/avatar/20.jpg"
                },
                {
                    "id": 6,
                    "title": "Melissa Morris",
                    "subtitle": "@melissa",
                    "detail": "São Paulo",
                    "avatar": "assets/images/avatar/21.jpg"
                },
                {
                    "id": 7,
                    "title": "Dominic Allen",
                    "subtitle": "@dominic",
                    "detail": "Guangzhou",
                    "avatar": "assets/images/avatar/16.jpg"
                },
                {
                    "id": 8,
                    "title": "Heather Clark",
                    "subtitle": "@heather",
                    "detail": "Shanghai",
                    "avatar": "assets/images/avatar/17.jpg"
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onTextChange': function(text: any) {
                  that.toastCtrl.presentToast(text);
            },
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            }
        };
    };

        prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
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
                    .object('searchBars/' + item.theme)
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
