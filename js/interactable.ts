import { Application, Assets, Sprite } from 'pixi.js';

interface Interactable {
    sprite: Sprite;
    OnClick(): void;
    OnRelease(): void;
}