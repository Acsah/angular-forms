export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string // alterEgo 是可选的，调用构造函数时可省略，注意 alterEgo? 中的问号 (?)。
  ) {}
}
