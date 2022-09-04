import Navbars from '../components/Navbars';
import Footer from '../components/Footer';
import "antd/dist/antd.css";
import {Table,Button,Modal,Input} from "antd";
import {useState} from 'react';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
export const Utilisateur = () => {
    const [isEditing,setIsEditing] = useState(false)
    const [editingStudent, setEditingStudent] = useState(null)
    const[dataSource,setDataSource]= useState([
       {
          id:1,
          name:'john',
          email:'john@gmail.com',
          address:'john Address'
       } ,
       {
        id:2,
        name:'rose',
        email:'rose@gmail.com',
        address:'rose Address' 
     } ,
     {
        id:3,
        name:'david',
        email:'david@gmail.com',
        address:'david Address' 
     } ,
     {
        id:4,
        name:'jones',
        email:'jones@gmail.com',
        address:'jones Address' 
     } ,
    ])
    const columns=[
       {
         key:'1',
         title:'ID_CARD',
         dataIndex:'id'  
       } ,

       {
        key:'2',
        title:'Name',
        dataIndex:'name'  
      } ,
      {
        key:'3',
        title:'Email',
        dataIndex:'email'  
      } ,
      {
        key:'4',
        title:"Address",
        dataIndex:"address",  
      } ,
      {
          key:"5",
          title:"Actions",
          render:(record) =>{
             return <>
             <EditOutlined onClick={()=>{
              onEditStudent(record);
             }}/>
             <DeleteOutlined onClick={()=>{
               onDeleteStudent(record)  
             }} style={{color:"red",marginLeft:12}}/>
             </>
          }
      }
    ];
    const onAddStudent =()=> {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name:"Name" + randomNumber,
            email:randomNumber +'@gmail.com',
            address: "address" + randomNumber ,
        };
        setDataSource ((pre)=>{
           return [...pre,newStudent];
        });
    };
     const onDeleteStudent=(record)=>{
         Modal.confirm({
             title:'etes vous certains de vouloir supprimer ce menbre ?',
             okText: 'Yes',
             okType:"danger",
             onOk:()=>{
                setDataSource(pre=>{
                    return pre.filter(student => student.id !== record.id) 
                    });
             }
         })
      
     };
     const onEditStudent=(record)=>{
       setIsEditing(true);
       setEditingStudent({...record})
     };
     const  resetEditing=()=>{
         setIsEditing(false);
         setEditingStudent(null)
     };
    return(
        <div>
            <Navbars/>
      <div><h1 class="italic text-3xl text-black  left-12 ">GESTION UTILISATEUR</h1></div>
     <div class=" p-8">
     <center><Button class="  ml-72 left-2 space-y-4" onClick={onAddStudent} >Ajouter un Menbre</Button></center><br></br>
      <Table 
      columns={columns} dataSource={dataSource}> 
      </Table>
      <Modal
      title="Editer un menbre"
      visible={isEditing}
      okText="Save"
      onCancel={()=>{
          resetEditing()
         
      }}
          
      onOk={()=>{
          setDataSource(pre=>{
             return pre.map(student=>{
                 if(student.id === editingStudent.id){
                  return editingStudent;
                 } else
              return student;
             })
          })
        resetEditing()
          }
      }
     > 
     <Input value={editingStudent?.name} onChange={(e)=>{
     setEditingStudent(pre=>{
         return {...pre, name:e.target.value}
     })
     }}/>
     <Input value={editingStudent?.email} onChange={(e)=>{
     setEditingStudent(pre=>{
         return {...pre, email:e.target.value}
     })
     }}/>
     <Input value={editingStudent?.address} onChange={(e)=>{
     setEditingStudent(pre=>{
         return {...pre, address:e.target.value}
     })
     }}/>
     </Modal>
      </div>
      <Footer/>
      </div>
    );
}
export default Utilisateur;