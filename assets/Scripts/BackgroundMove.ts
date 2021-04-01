
import { _decorator, Component, Node } from 'cc';
import * as cc from 'cc';

const { ccclass, property } = _decorator;


@ccclass('BackgroundMove')
export class BackgroundMove extends Component {

    @property(Node)
    private Background!: Node;

    onLoad(){
        
    }
}