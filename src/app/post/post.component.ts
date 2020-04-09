import { Component, OnInit } from '@angular/core';
import {AppComponent } from '../app.component';
import { Post } from '../post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: []
})
export class PostComponent implements OnInit {
public list:any;
localeList:any;
values:any;
locale:any;
Noticeataglance:string;
ProjectID:string;
ProjectTitle:string;
Country:string;
NoticeNo:string;
NoticeType:string;
NoticeStatus:string;
BorrowerBidReference:string;
ProcurementMethod:string;
LanguageofNotice:string;
SubmissionDeadlineDateTime:Date;
PublishedDate:Date;
CONTACTINFORMATION:string;
OrganizationDepartment:string;
Name:string;
Address:string;
City:string;
ProvinceState:string;
PostalCode:string;
Phone:Date;
Email:string;
Website:string;
Overview:string;
Details:string;

myjson:any;

  constructor(private _PostService:AppComponent) 
  {
      this.getPost();    
        
  }


  ngOnInit() {

    
    this.values=this._PostService.api.indexOf('apilang=');
    
this.locale=this._PostService.api.substr(this.values+8,2);

this.myjson=
{
	"en":{
		"noticeataglance":"NOTICE AT-A-GLANCE",
		"ProjectID": "Project ID",
		"ProjectTitle": "Project Title",
		"Country": "Country",
		"NoticeNo": "Notice No",
		"NoticeType": "Notice Type",
		"NoticeStatus": "Notice Status",
		"BorrowerBidReference": "Borrower Bid Reference",
		"ProcurementMethod": "Procurement Method",
		"LanguageofNotice": "Language of Notice",
		"SubmissionDeadlineDateTime": "Submission Deadline Date/Time",
		"PublishedDate": "Published Date",
		"CONTACTINFORMATION": "CONTACT INFORMATION",
		"OrganizationDepartment": "Organization/Department",
		"Name": "Name",
		"Address": "Address",
		"City": "City",
		"ProvinceState": "Province/State",
		"PostalCode": "Postal Code",
		"Phone": "Phone",
		"Email": "Email",
		"Website": "Website",
		"Overview":"Overview",
		"Details":"Details"
		
	},
	"es":{
		"noticeataglance": "DATOS BÁSICOS DEL ANUNCIO",
		"ProjectID": "No. de identificación del proyecto",
		"ProjectTitle": "Nombre del Proyecto",
		"Country": "País",
		"NoticeNo": "N.° de anuncio",
		"NoticeType": "Tipo de anuncio",
		"NoticeStatus": "Estado del anuncio"	,
		"BorrowerBidReference": "Referencia de la oferta del prestatario",
		"ProcurementMethod": "Método de adquisiciones",
		"LanguageofNotice": "Idioma del anuncio",
		"SubmissionDeadlineDateTime": "Fecha/Hora límite de presentación",
		"PublishedDate": "Fecha de publicación",
		"CONTACTINFORMATION": "INFORMACIÓN DE CONTACTO",
		"OrganizationDepartment": "Organización/Departamento",
		"Name": "Nombre",
		"Address": "Dirección",
		"City": "Ciudad",
		"ProvinceState": "Provincia/Estado",
		"PostalCode": "Código postal",
		"Phone": "Teléfono",
		"Email": "Correo electrónico",
		"Website": "Sitio web",
		"Overview":"VISIÓN GENERAL",
		"Details":"DETALLES"
	},
	"fr":{
		"noticeataglance": "L’AVIS EN BREF",
		"ProjectID": "Numéro du Projet",
		"ProjectTitle": "Intitulé du Projet",
		"Country": "Pays",
		"NoticeNo": "No d’avis",
		"NoticeType": "Type d’avis",
		"NoticeStatus": "État"	,
		"BorrowerBidReference": "Référence de l'offre emprunteur",
		"ProcurementMethod": "Mode de passation",
		"LanguageofNotice": "Langue",
		"SubmissionDeadlineDateTime": "Date/heure limite de dépôt",
		"PublishedDate": "Date de publication",
		"CONTACTINFORMATION": "INFORMATIONS DE CONTACT",
		"OrganizationDepartment": "Organisme/département",
		"Name": "Nom",
		"Address": "Adresse",
		"City": "Ville",
		"ProvinceState": "Province/État",
		"PostalCode": "Code postal",
		"Phone": "Téléphone",
		"Email": "Courriel",
		"Website": "Site web",
		"Overview":"VUE D’ENSEMBLE",
		"Details":"DÉTAILS"
	},
	"pt":{
		"noticeataglance": "NOTIFICAÇÃO RÁPIDA",
		"ProjectID": "Identidade do Projeto",
		"ProjectTitle": "Título do projeto",
		"Country": "País",
		"NoticeNo": "Notificação Nº",
		"NoticeType": "Tipo de notificação",
		"NoticeStatus": "Notificação da situação"	,
		"BorrowerBidReference": "Referência à licitação do mutuário",
		"ProcurementMethod": "Método de Aquisição",
		"LanguageofNotice": "Idioma da notificação",
		"SubmissionDeadlineDateTime": "Prazo/Hora de apresentação",
		"PublishedDate": "Data de publicação",
		"CONTACTINFORMATION": "INFORMAÇÃO PARA CONTATO",
		"OrganizationDepartment": "Organização/Departamento",
		"Name": "Nome",
		"Address": "Endereço",
		"City": "Cidade",
		"ProvinceState": "Estado",
		"PostalCode": "Código postal",
		"Phone": "Telefone",
		"Email": "E-mail",
		"Website": "Website",
		"Overview":"VISÃO GERAL",
		"Details":"DETALHES"
	},
	"ru":{
		"noticeataglance": "КРАТКИЕ СВЕДЕНИЯ ОБ УВЕДОМЛЕНИИ",
		"ProjectID": "Идентификационный номер проекта",
		"ProjectTitle": "Название Проекта",
		"Country": "Страна",
		"NoticeNo": "Уведомление №",
		"NoticeType": "Тип уведомления",
		"NoticeStatus": "Состояние уведомления"	,
		"BorrowerBidReference": "Номер заявки заемщика",
		"ProcurementMethod": "Метод закупок",
		"LanguageofNotice": "Язык уведомления",
		"SubmissionDeadlineDateTime": "Крайний срок подачи заявок (дата и время)",
		"PublishedDate": "Дата опубликования",
		"CONTACTINFORMATION": "КОНТАКТНАЯ ИНФОРМАЦИЯ",
		"OrganizationDepartment": "Организация / отдел",
		"Name": "Имя",
		"Address": "Адрес",
		"City": "Город",
		"ProvinceState": "Провинция / штат",
		"PostalCode": "Почтовый индекс",
		"Phone": "Телефон",
		"Email": "Электронная почта",
		"Website": "вэб-страница",
		"Overview":"ОБЗОР",
		"Details":"ПОДРОБНОСТИ"
	},
	"ar":{
		"noticeataglance": "لمحة على الإخطار",
		"ProjectID": "معرّف المشروع",
		"ProjectTitle": "اسم المشروع",
		"Country": "البلد",
		"NoticeNo": "رقم الإخطار",
		"NoticeType": "نوع الإخطار",
		"NoticeStatus": "وضع الإخطار"	,
		"BorrowerBidReference": "الرقم المرجعي لعطاء المقترض",
		"ProcurementMethod": "أسلوب المشتريات",
		"LanguageofNotice": "لغة الإخطار",
		"SubmissionDeadlineDateTime": "تاريخ/موعد الأجل النهائي للتسليم",
		"PublishedDate": "تاريخ النشر",
		"CONTACTINFORMATION": "معلومات العقد",
		"OrganizationDepartment": "المنظمة/الإدارة",
		"Name": "الاسم",
		"Address": "العنوان",
		"City": "المدينة",
		"ProvinceState": "الإقليم/الولاية",
		"PostalCode": "الرمز البريدي",
		"Phone": "الهاتف",
		"Email": "البريد الالكتروني",
		"Website": "موقع الويب",
		"Overview":"عرض عام",
		"Details":"التفاصيل"
	},
	"zh":{
		"noticeataglance": "通知概览",
		"ProjectID": "项目编号",
		"ProjectTitle": "项目名称",
		"Country": " 国家",
		"NoticeNo": "通知编号",
		"NoticeType": "通知类型",
		"NoticeStatus": "通知状态"	,
		"BorrowerBidReference": "借方投标参考",
		"ProcurementMethod": "采购方法",
		"LanguageofNotice": "通知所用语言",
		"SubmissionDeadlineDateTime": "提交截止日期/时间",
		"PublishedDate": "发布日期",
		"CONTACTINFORMATION": "联系信息",
		"OrganizationDepartment": "机构/部门",
		"Name": "名称",
		"Address": "地址",
		"City": "城市",
		"ProvinceState": "省/州",
		"PostalCode": "邮政编码",
		"Phone": " 电话",
		"Email": "电邮",
		"Website": "网站",
		"Overview":"概要",
		"Details":"细节"
	}
}

if(this.locale!="en" && this.locale!="es" && this.locale!="fr"&& this.locale!="pt"&& this.locale!="ar"&& this.locale!="ru"&& this.locale!="zh")
{
  this.locale="en";
}

this.Noticeataglance=this.myjson[this.locale].noticeataglance;
this.ProjectID    =this.myjson[this.locale].ProjectID;
this.ProjectTitle =this.myjson[this.locale].ProjectTitle;   
this.Country    =this.myjson[this.locale].Country;
this.NoticeNo    =this.myjson[this.locale].NoticeNo;
this.NoticeType    =this.myjson[this.locale].NoticeType;
this.NoticeStatus    =this.myjson[this.locale].NoticeStatus;
this.BorrowerBidReference   =this.myjson[this.locale].BorrowerBidReference; 
this.ProcurementMethod    =this.myjson[this.locale].ProcurementMethod;
this.LanguageofNotice    =this.myjson[this.locale].LanguageofNotice;
this.SubmissionDeadlineDateTime  =this.myjson[this.locale].SubmissionDeadlineDateTime;  
this.PublishedDate    =this.myjson[this.locale].PublishedDate;
this.CONTACTINFORMATION    =this.myjson[this.locale].CONTACTINFORMATION;
this.OrganizationDepartment    =this.myjson[this.locale].OrganizationDepartment;
this.Name    =this.myjson[this.locale].Name;
this.Address    =this.myjson[this.locale].Address;
this.City    =this.myjson[this.locale].City;
this.ProvinceState    =this.myjson[this.locale].ProvinceState;
this.PostalCode  =this.myjson[this.locale].PostalCode;  
this.Phone    =this.myjson[this.locale].Phone;
this.Email    =this.myjson[this.locale].Email;
this.Website=this.myjson[this.locale].Website;
this.Overview=this.myjson[this.locale].Overview;
this.Details=this.myjson[this.locale].Details;

    
  }
  

  getPost()
  {
    this._PostService.getData().subscribe(
      
      res=>{
		this.list = res["procnotices"];
		
        
        }
        
      )
      };

}
