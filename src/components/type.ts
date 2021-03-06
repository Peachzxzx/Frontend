import { ObjectID } from "mongodb"
import { Component } from "react";


//token 

export interface Token {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
    profilepic : number 
}

//Style

export interface Style {
    classes?: any;
}

//Lobby Props

export interface user1 {
    name : {
        firstName : string,
        lastName : string
    }
    profilePic : number,
    telephone : string,
    email : string,
    email_verified: boolean,
    sex: string,
    createdOn: string,
    modifiedOn: null | string,
    userType: string
}

export interface user {
    userID : string
    name : {
        firstName : string,
        lastName : string
    }
    profilepic : number,
    ready : boolean
}

export interface chat {
    author : string,
    userID : string,
    message : string,
    profilepic : number
    time : Date
}

export interface Lobby {
    id? : ObjectID
    dormName : string,
    roomType : string,
    owner : user,
    member : user[]
    chat : chat[]
    maxMember : number
}

//Lobby MainPage

export interface LobbyRowProps {
    dormName : any,
    room : any
    id? : ObjectID,
    member : any,
    max : any,
    handleRouting : (s : string) => void
}
export interface backButtonProps {
    handleGoBack : () => void
}

export interface CreateLobbyProps {
    handleRouting : (s : string) => void
}

export interface JoinCodeProps {
    handleRouting : (s : string) => void
}
export interface ModalMainPageProps {
    show : boolean,
    handleClose : ()=> void,
    handleRouting : (s : string) => void
}
export interface LobbyListProps {
    lobbylist : any,
    handleRouting : (s : string) => void
}

export interface SearchLobbyProps {
    handleSubmit : (s : string) => void
}

//Lobby LobbyPage

export interface ChatRoomProps {
    handleGoChatPage : () => void
}

export interface CloseLobbyProps {
    handleCloseLobby : () => void,
    disable : boolean
}

export interface DeleteLobbyProps {
    handleDelete : () => void
}

export interface HomeButtonProps {
    handleGoHome: () => void;
}

export interface ImagesProps {
    attr : any,
    key : number,
    index : number
}

export interface ImagesListProps {
    member : any ,
    maxMember : number,
    isOwner : boolean,
    handleKick : (userID : string) => void
}

export interface ImagesOwnerProps {
    attr : any
    handleKick : (userID : string) => void,
    index : number
}

export interface LeaveLobbyProps {
    handleLeave : () => void
}

export interface ModalLobbyPageProps {
    show: boolean,
    action: string,
    handleAction: () => void,
    handleCancel : ()=> void
}

export interface ReadyProps {
    handleReady : () => void,
    text : string
}

//Lobby ChatPage

export interface ChatBoxProps {
    handleSubmit : (message : string) => void
}

export interface ChatListProps {
    children: React.ReactNode
}

export interface propsSendMessage {
    message : string,
}

export interface propsReceiver {
    author : {firstName:string,lastName:string},
    userID : string,
    message : string,
    profilepic : number,
    time? : Date
}

export interface propsSender {
    author : {firstName:string,lastName:string},
    userID : string,
    message : string,
    profilepic : number,
    time? : Date
}

// authService Interface

//Register DormOwner

export interface RegisterDormOwnerForm {
    firstName: string,
    lastName: string,
    telephone: string,
    email: string,
    email_verified: string,
    sex: string,
    password: string,
    userType: string,
    natId: string
}

export interface DormOwnerFormValue {
    firstName : string,
    lastName : string,
    telephone : string,
    password : string,
    confirmPassword : string,
    sex : string,
    acceptTerm : boolean,
    email : string,
    natId : string
}
export interface DormOwnerMyFormProps {
    firstName? : string,
    lastName? : string,
    telephone? : string,
    password? : string,
    confirmPassword? : string,
    sex? : string,
    acceptTerm? : boolean,
    email? : string,
    natId? : string
    handleSubmit : (form  : RegisterDormOwnerForm) => Promise<boolean>
    classes : any
}

//Register DormFinder

export interface RegisterDormFinderForm {
    firstName: string,
    lastName: string,
    telephone: string,
    email: string,
    email_verified: string,
    sex: string,
    password: string,
    userType: string,
}

export interface DormFinderFormValue {
    firstName: string;
    lastName: string;
    telephone: string;
    password: string;
    confirmPassword: string;
    sex: string;
    acceptTerm: boolean;
    email: string;
}

export interface DormFinderMyFormProps {
    firstName? : string,
    lastName? : string,
    telephone? : string,
    password? : string,
    confirmPassword? : string,
    sex? : string,
    acceptTerm? : boolean,
    email? : string,
    handleSubmit : (form  : RegisterDormFinderForm) => Promise<boolean>
    classes : any
}

//Edit Profile

export interface EditProfileProps {
    userType : string,
    classes : any
}

export interface EditProfileDormForm {
    firstName: string,
    lastName: string,
    telephone: string,
    email: string,
    email_verified: string,
    sex: string,
    password: string,
    userType: string,
}


export interface EditProfileFormValue {
    firstName: string;
    lastName: string;
    telephone: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export interface EditProfileMyFormProps {
    firstName? : string,
    lastName? : string,
    telephone? : string,
    password? : string,
    confirmPassword? : string,
    email? : string,
    handleSubmit : () => void
    classes : any
}


export interface LoginForm {
    username : string,
    password : string
}
export interface LoginFormProps {
    username? : string,
    password? : string,
    handleSubmit : (form : LoginForm) => Promise<boolean>
}

export interface dialogProps {
    open? : boolean,
    title : string,
    content : string
}

export interface tokenDto {
    userId : string,
    name : {
        firstName : string,
        lastName : string
    },
    role : string,
    token_type : string,
    exp : number,
    iap : number,
    avatar : number,
    access_token? : string,
    refresh_token? : string
}
export interface RouteProp {
    path : string,
    Component : any
}