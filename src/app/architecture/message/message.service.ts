import {Injectable, EventEmitter} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";

export class Message {
  constructor(
    public code?: string,
    public error?: string,
    public message?: string,
    public status?: number
  ) { }
}

export class MessageItem {

  public static ALERT_TYPE_INFO = 'info';
  public static ALERT_TYPE_DANGER = 'error';
  public static ALERT_TYPE_SUCCESS = 'done';
  public static ALERT_TYPE_WARNING = 'warning';

  public static CONFIRM_TYPE_OK = 'confirm_ok';
  public static CONFIRM_TYPE_YES_NO = 'confirm_yes_no';

  private _msg: string;
  private _type: string;
  private _listenerNo?: ConfirmListener;
  private _listenerYesOk?: ConfirmListener;

  constructor(msg: string, type: string, listenerYesOk?: ConfirmListener, listenerNo?: ConfirmListener) {
    this._msg = msg;
    this._type = type;
    this._listenerNo = listenerNo;
    this._listenerYesOk = listenerYesOk;
  }

  public get msg(): string {
    return this._msg;
  }

  public get type(): string {
    return this._type;
  }

  public executYesOk(): void {
    if (this._listenerYesOk !== null && this._listenerYesOk !== undefined) {
      this._listenerYesOk();
    }
  }

  public executNo(): void {
    if (this._listenerNo !== null && this._listenerNo !== undefined) {
      this._listenerNo();
    }
  }

  public isConfirmTypeOk(): boolean {
    return MessageItem.CONFIRM_TYPE_OK === this.type;
  }

  public isConfirmTypeYesNo(): boolean {
    return MessageItem.CONFIRM_TYPE_YES_NO === this.type;
  }
}


export class MessageDialog {

  private _dialog: ComponentType<any>;
  private _data: any;
  private _labelButtonYesOk: string = "" ;
  private _labelButtonNo: string ="";
  private _listenerNo?: ConfirmDataListener;
  private _listenerYesOk?: ConfirmDataListener;
  private _width: string;
  private _height: string;

  constructor(dialog: ComponentType<any>, data:any, labelButtonYesOk?: string, listenerYesOk?: ConfirmDataListener, labelButtonNo?:string, listenerNo?: ConfirmDataListener, width?: string, height?: string) {
    this._dialog = dialog;
    this._data = data;
    if(labelButtonYesOk){
      this._labelButtonYesOk = labelButtonYesOk;
    }else if (labelButtonYesOk == undefined){
      this._labelButtonYesOk = "OK";
    }
    if(labelButtonNo) {
      this._labelButtonNo = labelButtonNo;
    }else if(labelButtonNo == undefined){
      this._labelButtonNo = "CANCELAR";
    }
    this._listenerNo = listenerNo;
    this._listenerYesOk = listenerYesOk;
    this._width = width || '30%';
    this._height = height || '30%';
  }

  public get dialog(): ComponentType<any> {
    return this._dialog;
  }

  public get data(): any {
    return this._data;
  }

  public set data(data: any) {
    this._data = data;
  }

  public get labelButtonYesOk(): string {
    return this._labelButtonYesOk;
  }

  public get labelButtonNo(): string {
    return this._labelButtonNo;
  }

  public get width(): string {
    return this._width;
  }

  public get height(): string{
    return this._height
  }

  /**
   * Execulta o callback para as ações 'OK/YES'.
   */
  public executYesOk(): void {
    if (this._listenerYesOk !== null && this._listenerYesOk !== undefined) {
      this._listenerYesOk(this.data);
    }
  }

  /**
   * Execulta o callback para a ação 'NO'.
   */
  public executNo(): void {
    if (this._listenerNo !== null && this._listenerNo !== undefined) {
      this._listenerNo(this.data);
    }
  }

  /**
   * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_OK'.
   *
   * @returns boolean
   */
  public isConfirmTypeOk(): boolean {
    return (this._listenerYesOk !== null && this._listenerYesOk !== undefined && !!this.labelButtonYesOk) &&
      (this._listenerNo === null || this._listenerNo === undefined || !this.labelButtonNo );
  }


  /**
   * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_YES_NO'.
   *
   * @returns boolean
   */
  public isConfirmTypeYesNo(): boolean {
    return this._listenerNo !== null && this._listenerNo !== undefined && !!this.labelButtonYesOk
      this._listenerYesOk !== null && this._listenerYesOk !== undefined && !!this.labelButtonNo;
  }

}
/**
 * Interface 'Listener' que determina o contrato da função callback referente ao 'confirm-mesage'.
 *
 * @author Guiliano Rangel (UEG)
 */
export type ConfirmListener = () => void;

/**
 * Interface 'Listener' que determina o contrato da função callback referente ao 'confirm-dialog'.
 *
 * @author Guiliano Rangel (UEG)
 */
export type ConfirmDataListener = (data: any) => void;

/**
 * Classe 'service' responsável por prover o recurso de mensagem da aplicação.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class MessageService {
  private msgEmitter: EventEmitter<MessageItem>;
  private confirmEmitter: EventEmitter<MessageItem>;
  private dialogEmitter: EventEmitter<MessageDialog>;

  constructor() {
    this.msgEmitter = new EventEmitter();
    this.confirmEmitter = new EventEmitter();
    this.dialogEmitter = new EventEmitter();
  }

  /**
   * Retorna a descrição da mensagem conforme os parâmetros informados.
   *
   * @param msg -
   * @param params
   */
  public getDescription(msg: string, params?: any): string {
    let description =  msg;
    return description;
  }

  /**
   * Adiciona o modal de confirmação segundo o type (confirm_ok, confirm_yes_no), informado.
   *
   * @param msg -
   * @param type -
   * @param params -
   * @param listenerYesOk
   * @param listenerNo
   */
  private addConfirm(msg: string, type: string, params: any, listenerYesOk?: ConfirmListener, listenerNo?: ConfirmListener): void {
    const description = this.getDescription(msg, params);

    if (description) {
      this.confirmEmitter.emit(new MessageItem(description, type, listenerYesOk, listenerNo));
    }
  }

  /**
   * Adiciona a mensagem segundo o type (alert-success, alert-info, alert-warning e alert-danger), informado.
   *
   * @param data
   * @param type -
   * @param params -
   */
  private addMsg(data: Message | string, type: string, params?: any): void {
    const msg = data instanceof Message ? data.message || "" : data;
    const description = this.getDescription(msg, params);

    if (description) {
      this.msgEmitter.emit(new MessageItem(description, type));
    }
  }

  /**
   * Adiciona o modal de confirmação OK.
   *
   * @param msg -
   * @param listenerOk -
   * @param params -
   */
  public addConfirmOk(msg: string, listenerOk?: ConfirmListener, params?: any): void {
    this.addConfirm(msg, MessageItem.CONFIRM_TYPE_OK, params, listenerOk);
  }

  /**
   * Adiciona o modal de confirmação YES/NO.
   *
   * @param msg -
   * @param listenerYes -
   * @param listenerNo -
   * @param params -
   */
  public addConfirmYesNo(msg: string, listenerYes?: ConfirmListener, listenerNo?: ConfirmListener, params?: any): void {
    this.addConfirm(msg, MessageItem.CONFIRM_TYPE_YES_NO, params, listenerYes, listenerNo);
  }

  /**
   * Adiciona o Dialog com ação de  YES/NO.
   *
   * @param componentType
   * @param data
   * @param labelButtonYesOk
   * @param listenerYesOk
   * @param labelButtonNo
   * @param listenerNo -
   * @param width
   * @param height
   */
  public addDialogYesNo(componentType: ComponentType<any>, data: any, labelButtonYesOk:string, listenerYesOk?: ConfirmDataListener, labelButtonNo?: string, listenerNo?: ConfirmDataListener, width?:string, height?:string,): void {
    this.dialogEmitter.emit(new MessageDialog(componentType, data, labelButtonYesOk, listenerYesOk, labelButtonNo, listenerNo, width, height));

  }

  /**
   * Adiciona mensagem de Sucesso.
   *
   * @param msg -
   * @param params -
   */
  public addMsgSuccess(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_SUCCESS, params);
  }

  /**
   * Adiciona mensagem de Informação.
   *
   * @param msg -
   * @param params -
   */
  public addMsgInf(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_INFO, params);
  }

  /**
   * Adiciona mensagem de Alerta.
   *
   * @param msg -
   * @param params -
   */
  public addMsgWarning(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_WARNING, params);
  }

  /**
   * Adiciona mensagem de Erro.
   *
   * @param msg -
   * @param params -
   */
  public addMsgDanger(msg: Message | string, params?: any): void {
    this.addMsg(msg, MessageItem.ALERT_TYPE_DANGER, params);
  }

  public getMsgEmitter(): EventEmitter<MessageItem> {
    return this.msgEmitter;
  }

  public getConfirmEmitter(): EventEmitter<MessageItem> {
    return this.confirmEmitter;
  }

  public getDialogEmitter(): EventEmitter<MessageDialog> {
    return this.dialogEmitter;
  }
}
