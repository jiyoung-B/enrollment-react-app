import React from "react";
import '../EnrolList.css';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { useEffect } from 'react';


// 과정 등록 학생 리스트의 컬럼 정의 (이름, 성, 과정, 이메일)
const columns = [
    {
      key : 'fname', name : 'First Name', fieldName : 'fname',
        minWidth: 90, isResizable: false
    },
    {
        key : 'lname', name : 'Last Name', fieldName : 'lname',
        minWidth: 90, isResizable: false
    },
    {
        key : 'program', name : '과정종류', fieldName : 'program',
        minWidth: 90, isResizable: false
    },
    {
        key : 'email', name: '이메일', fieldName : 'email',
        minWidth: 130, isResizable: false
    }
]

// 테스트용 데이터 삽입 - 컬럼 정의시 사용했던 fieldName으로 값 초기화
// let items = [];

//함수, 배열 전달
const EnrolList = (props) => {
    // 과정 등록 학생 데이터가 추가될때 마다 UI를 재렌더링하기 위해
    // useEffect 리액트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 DOM 렌더링 처리
    // props 객체에 값이 존재할때 마다 detailsList 렌더링해서 화면에 표시
    const [items, setItems] = React.useState([]);
    useEffect(() => {
        const curItemKey = props.studDetails.key;
        if (curItemKey) {
            setItems([...items, props.studDetails]);
            // props.setStudDetails({});
        }
    }, [props]);


    return (
        <div className="enrolList">
            <DetailsList items={items} columns={columns} />
        </div>
    );
}
export default EnrolList;