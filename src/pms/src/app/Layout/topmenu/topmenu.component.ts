import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';
import { NavItem } from '../main/nav-items';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopmenuComponent implements OnInit {

  // navItems: NavItem[] = [
  //   {
  //     displayName: 'DevFestFL',
  //     iconName: 'close',
  //     children: [
  //       {
  //         displayName: 'Speakers',
  //         iconName: 'group',
  //         children: [
  //           {
  //             displayName: 'Michael Prentice',
  //             iconName: 'person',
  //             route: 'michael-prentice',
  //             children: [
  //               {
  //                 displayName: 'Create Enterprise UIs',
  //                 iconName: 'star_rate',
  //                 route: 'material-design'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Stephen Fluin',
  //             iconName: 'person',
  //             route: 'stephen-fluin',
  //             children: [
  //               {
  //                 displayName: 'What\'s up with the Web?',
  //                 iconName: 'star_rate',
  //                 route: 'what-up-web'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Mike Brocchi',
  //             iconName: 'person',
  //             route: 'mike-brocchi',
  //             children: [
  //               {
  //                 displayName: 'My ally, the CLI',
  //                 iconName: 'star_rate',
  //                 route: 'my-ally-cli'
  //               },
  //               {
  //                 displayName: 'Become an Angular Tailor',
  //                 iconName: 'star_rate',
  //                 route: 'become-angular-tailer'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Sessions',
  //         iconName: 'speaker_notes',
  //         children: [
  //           {
  //             displayName: 'Create Enterprise UIs',
  //             iconName: 'star_rate',
  //             route: 'material-design'
  //           },
  //           {
  //             displayName: 'What\'s up with the Web?',
  //             iconName: 'star_rate',
  //             route: 'what-up-web'
  //           },
  //           {
  //             displayName: 'My ally, the CLI',
  //             iconName: 'star_rate',
  //             route: 'my-ally-cli'
  //           },
  //           {
  //             displayName: 'Become an Angular Tailor',
  //             iconName: 'star_rate',
  //             route: 'become-angular-tailer'
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Feedback',
  //         iconName: 'feedback',
  //         route: 'feedback'
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Disney',
  //     iconName: 'close',
  //     children: [
  //       {
  //         displayName: 'Speakers',
  //         iconName: 'group',
  //         children: [
  //           {
  //             displayName: 'Michael Prentice',
  //             iconName: 'person',
  //             route: 'michael-prentice',
  //             children: [
  //               {
  //                 displayName: 'Create Enterprise UIs',
  //                 iconName: 'star_rate',
  //                 route: 'material-design'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Stephen Fluin',
  //             iconName: 'person',
  //             route: 'stephen-fluin',
  //             children: [
  //               {
  //                 displayName: 'What\'s up with the Web?',
  //                 iconName: 'star_rate',
  //                 route: 'what-up-web'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Mike Brocchi',
  //             iconName: 'person',
  //             route: 'mike-brocchi',
  //             children: [
  //               {
  //                 displayName: 'My ally, the CLI',
  //                 iconName: 'star_rate',
  //                 route: 'my-ally-cli'
  //               },
  //               {
  //                 displayName: 'Become an Angular Tailor',
  //                 iconName: 'star_rate',
  //                 route: 'become-angular-tailer'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Sessions',
  //         iconName: 'speaker_notes',
  //         children: [
  //           {
  //             displayName: 'Create Enterprise UIs',
  //             iconName: 'star_rate',
  //             route: 'material-design'
  //           },
  //           {
  //             displayName: 'What\'s up with the Web?',
  //             iconName: 'star_rate',
  //             route: 'what-up-web'
  //           },
  //           {
  //             displayName: 'My ally, the CLI',
  //             iconName: 'star_rate',
  //             route: 'my-ally-cli'
  //           },
  //           {
  //             displayName: 'Become an Angular Tailor',
  //             iconName: 'star_rate',
  //             route: 'become-angular-tailer'
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Feedback',
  //         iconName: 'feedback',
  //         route: 'feedback'
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Orlando',
  //     iconName: 'close',
  //     children: [
  //       {
  //         displayName: 'Speakers',
  //         iconName: 'group',
  //         children: [
  //           {
  //             displayName: 'Michael Prentice',
  //             iconName: 'person',
  //             route: 'michael-prentice',
  //             children: [
  //               {
  //                 displayName: 'Create Enterprise UIs',
  //                 iconName: 'star_rate',
  //                 route: 'material-design'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Stephen Fluin',
  //             iconName: 'person',
  //             route: 'stephen-fluin',
  //             children: [
  //               {
  //                 displayName: 'What\'s up with the Web?',
  //                 iconName: 'star_rate',
  //                 route: 'what-up-web'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Mike Brocchi',
  //             iconName: 'person',
  //             route: 'mike-brocchi',
  //             children: [
  //               {
  //                 displayName: 'My ally, the CLI',
  //                 iconName: 'star_rate',
  //                 route: 'my-ally-cli'
  //               },
  //               {
  //                 displayName: 'Become an Angular Tailor',
  //                 iconName: 'star_rate',
  //                 route: 'become-angular-tailer'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Sessions',
  //         iconName: 'speaker_notes',
  //         children: [
  //           {
  //             displayName: 'Create Enterprise UIs',
  //             iconName: 'star_rate',
  //             route: 'material-design'
  //           },
  //           {
  //             displayName: 'What\'s up with the Web?',
  //             iconName: 'star_rate',
  //             route: 'what-up-web'
  //           },
  //           {
  //             displayName: 'My ally, the CLI',
  //             iconName: 'star_rate',
  //             route: 'my-ally-cli'
  //           },
  //           {
  //             displayName: 'Become an Angular Tailor',
  //             iconName: 'star_rate',
  //             route: 'become-angular-tailer'
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Feedback',
  //         iconName: 'feedback',
  //         route: 'feedback'
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Maleficent',
  //     disabled: true,
  //     iconName: 'close',
  //     children: [
  //       {
  //         displayName: 'Speakers',
  //         iconName: 'group',
  //         children: [
  //           {
  //             displayName: 'Michael Prentice',
  //             iconName: 'person',
  //             route: 'michael-prentice',
  //             children: [
  //               {
  //                 displayName: 'Create Enterprise UIs',
  //                 iconName: 'star_rate',
  //                 route: 'material-design'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Stephen Fluin',
  //             iconName: 'person',
  //             route: 'stephen-fluin',
  //             children: [
  //               {
  //                 displayName: 'What\'s up with the Web?',
  //                 iconName: 'star_rate',
  //                 route: 'what-up-web'
  //               }
  //             ]
  //           },
  //           {
  //             displayName: 'Mike Brocchi',
  //             iconName: 'person',
  //             route: 'mike-brocchi',
  //             children: [
  //               {
  //                 displayName: 'My ally, the CLI',
  //                 iconName: 'star_rate',
  //                 route: 'my-ally-cli'
  //               },
  //               {
  //                 displayName: 'Become an Angular Tailor',
  //                 iconName: 'star_rate',
  //                 route: 'become-angular-tailer'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Sessions',
  //         iconName: 'speaker_notes',
  //         children: [
  //           {
  //             displayName: 'Create Enterprise UIs',
  //             iconName: 'star_rate',
  //             route: 'material-design'
  //           },
  //           {
  //             displayName: 'What\'s up with the Web?',
  //             iconName: 'star_rate',
  //             route: 'what-up-web'
  //           },
  //           {
  //             displayName: 'My ally, the CLI',
  //             iconName: 'star_rate',
  //             route: 'my-ally-cli'
  //           },
  //           {
  //             displayName: 'Become an Angular Tailor',
  //             iconName: 'star_rate',
  //             route: 'become-angular-tailer'
  //           }
  //         ]
  //       },
  //       {
  //         displayName: 'Feedback',
  //         iconName: 'feedback',
  //         route: 'feedback'
  //       }
  //     ]
  //   }
  // ];
  navItems:NavItem[]|any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.navItems=this.menuService.sidemenuLIst();
  }


}
