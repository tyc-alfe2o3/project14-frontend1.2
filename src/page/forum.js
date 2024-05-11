import React, { useState ,useEffect} from 'react';
import '..css/forum.css'
import { LikeFilled} from "@ant-design/icons";



function Forum(){
    const [activities, setActivities] = useState([
        { ReviewID:1,EventID:1,UserID:1,Rating:5.0,Comment:"what an excellent activity!" },
        { ReviewID:2,EventID:1,UserID:2,Rating:4.0,Comment:"nice"  },
        { ReviewID:3,EventID:2,UserID:1,Rating:4.5,Comment:"look forword to next time"  },
        { ReviewID:4,EventID:3,UserID:3,Rating:3.0,Comment:"not too bad"  }
    ]);//评论详情,后端完成后从数据库获取数据


    //fetch API请求,后续添加此功能从后端获取数据
    /*
    async function fetchOrders(){
        let t=await fetch('*******')//后端接口
        let data=await t.json()
        setcart(data);
        console.log(data)
      };
        useEffect(() => {
          fetchOrders();
        }, []); 
        */

    return(
        <body>
            <MainPage comments={activities}></MainPage>
        </body>
    );
}

function MainPage({comments}){
    if(comments.length>0)return(
      <body>
      <h2 class="title">activity forum</h2>
      <p class="title">666  comments</p>
        <ul>
        {comments.map((activity,index) => (
            <Comment key={index}
            ReviewID={activity.ReviewID} 
            EventID={activity.EventID} 
            UserID={activity.UserID} 
            Rating={activity.Rating} 
            Comment={activity.Comment}>
            </Comment>
        ))}
      </ul>
      </body>
    );
}


function Comment({ReviewID,EventID,UserID,Rating,Comment}){
    /*评论,简易版，仅显示事件id和用户id等，后续可从数据库中获取相应的事件名称，用户名，用户头像等，现阶段仅作简单表示
    *点赞功能暂时未写处理函数（给出的评论对应的数据库结构中好像没有这个键，后续考虑是否加入点赞功能）
    */

    const [num, setnum] = useState();//调整点赞数量的钩子

    useEffect(() => {
      // 在组件挂载完成时调用 show() 函数
      show();
      }, []); 

    function show(){
    let eventScoreElement = document.getElementById(ReviewID);
    let star=''
    for (let i = 1; i <= 5; i++) {
      if (i <= Rating) {
        star += '★'; // 显示实心星星
      } else {
        star += '☆'; // 显示空心星星
      }
    }
    eventScoreElement.innerHTML='event scores:'+'  '+star;
  }

  function like(){
    let eventScoreElements = document.getElementsByClassName("icon");
    for (let i = 0; i < eventScoreElements.length; i++) {
      if(eventScoreElements[i].id==ReviewID&&eventScoreElements[i].style.color !== "red"){eventScoreElements[i].style.color = "red";}
      else if(eventScoreElements[i].id==ReviewID&&eventScoreElements[i].style.color === "red"){eventScoreElements[i].style.color = "black";}
  }
}

  

    return(
        <div class="Comment_background">
            <div class="basic">
              <div class="user">
              <img class="head" src=""></img>
              <strong class="id_style">publisher's id:{UserID}</strong>
              </div>
              <div class="eid_style">
              <strong>event id:{EventID}</strong>
              <strong class="star" id={ReviewID}>event score:  {Rating}</strong>
              </div>
            </div>
            <div class="divider"></div>
            <div class="comment_main">
                <p>{Comment}</p>
            </div>
            <div className="icon" id={ReviewID} onClick={like}>
            <LikeFilled/>123
            </div>
        </div>
    );
}

export default Forum;
