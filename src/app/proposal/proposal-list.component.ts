import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://google.com',
    'Rails', 150, 120, 15, 'example@example.com')
    proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://google.com',
    'Rails', 150, 120, 15, 'example@example.com')
    proposalThree: Proposal = new Proposal(300, '123 Company', 'http://google.com',
    'Rails', 150, 120, 15, 'example@example.com')
        
    proposals: Proposal[] = [
        this.proposalOne, 
        this.proposalTwo, 
        this.proposalThree
    ]
}