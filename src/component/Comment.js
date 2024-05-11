// Comment.js
import React from 'react';
import "../css/Comment.css"

const Comment = () => {
    return (
        <li>
            <div className="head">
                <button></button>
                <h3>用户1</h3>
                <p>参加活动：</p>
                <p>英语六级</p>
                <p>活动评分：</p>
                <p>0</p>
            </div>
            <div className="main">
                <p>大学英语六级考试（又称CET-6，全称为“College English Test-6”）是由国家统一出题的，统一收费，统一组织考试，用来评定应试人英语能力的全国性的考试，每年各举行两次。</p>
            </div>
        </li>
    );
};

export default Comment;
