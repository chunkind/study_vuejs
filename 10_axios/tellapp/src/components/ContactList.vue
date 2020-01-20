<template>
    <div>
        <p class="addnew">
            <button class="btn btn-primary" @click="addContact()">새로운 연락처 추가하기</button>
        </p>
        <div id="example">
            <table id="list" class="table table-striped table=bordered table-hover">
                <thead>
                    <tr>
                        <th>이름</th><th>전화번호</th><th>주소</th><th>사진</th><th>편집/삭제</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>