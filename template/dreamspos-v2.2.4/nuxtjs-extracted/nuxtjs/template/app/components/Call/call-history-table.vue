<template>
    <a-table :columns="columns" :data-source="data" :row-selection="{}">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Username'">
                <div class="userimgname d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md me-2">
                        <img :src="getImageUrl(record.Image)" alt="product">
                    </a>
                    <a href="javascript:void(0);">{{ record.Username }}</a>
                </div>
            </template>
            <template v-else-if="column.key === 'Call_Type'">
                <div class="phone-call-icon"> <span :class="record.Class"> <vue-feather :type="record.Icon"
                    ></vue-feather></span> {{ record.Call_Type }}
                </div>
            </template>
            <template v-else-if="column.key === 'action'">
                <div class="action-table-data">
                    <div class="edit-delete-action d-flex align-items-center">
                        <a class="me-3 p-2 d-flex align-items-center p-1 border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#user-profile-new">
                            <i data-feather="eye" class="feather-eye"></i>
                        </a>
                        <a class="p-2 d-flex align-items-center p-1 border rounded" href="javascript:void(0);"  data-bs-toggle="modal" data-bs-target="#delete">
                            <i data-feather="trash-2" class="feather-trash-2"></i>
                        </a>
                    </div>
                </div>
            </template>
        </template>
    </a-table>
</template>

<script>
const columns = [
    {
        sorter: true,
    },
    {
        title: "Username",
        dataIndex: "Username",
        key: "Username",
        sorter: {
            compare: (a, b) => {
                a = a.Username.toLowerCase();
                b = b.Username.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Phone Number",
        dataIndex: "Phone_Number",
        sorter: {
            compare: (a, b) => {
                a = a.Phone_Number.toLowerCase();
                b = b.Phone_Number.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Call Type",
        dataIndex: "Call_Type",
        key: "Call_Type",
        sorter: {
            compare: (a, b) => {
                a = a.Call_Type.toLowerCase();
                b = b.Call_Type.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Duration",
        dataIndex: "Duration",
        sorter: {
            compare: (a, b) => {
                a = a.Duration.toLowerCase();
                b = b.Duration.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Date & Time",
        dataIndex: "Date_Time",
        sorter: {
            compare: (a, b) => {
                a = a.Date_Time.toLowerCase();
                b = b.Date_Time.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Action",
        key: "action",
        sorter: true,
    },
]
const data = [
    {
        id: "1",
        Image: "user-01.jpg",
        Username: "Arroon",
        Phone_Number: "+1 25182 94528",
        Icon: "phone-incoming",
        Class: "income-success me-1",
        Call_Type: "Incoming Call",
        Duration: "0.25",
        Date_Time: "19 Jan 2023 - 01:16 PM"
    },
    {
        id: "2",
        Image: "user-02.jpg",
        Username: "Rose",
        Phone_Number: "+1 93016 81932",
        Icon: "phone-missed",
        Class: "income-success-missed me-1",
        Call_Type: "Missed Call",
        Duration: "0",
        Date_Time: "24 Jan 2023 - 02:50 PM"
    },
    {
        id: "3",
        Image: "user-03.jpg",
        Username: "Benjamin",
        Phone_Number: "+1 25182 94528",
        Icon: "video",
        Class: "income-success me-1",
        Call_Type: "Incoming Call",
        Duration: "0.15",
        Date_Time: "03 Feb 2023 - 10:37 AM"
    },
    {
        id: "4",
        Image: "user-04.jpg",
        Username: "Kaitlin",
        Phone_Number: "+1 70328 96042",
        Icon: "phone-missed",
        Class: "income-success-missed me-1",
        Call_Type: "Missed Call",
        Duration: "0",
        Date_Time: "17 Feb 2023 - 11:25 AM"
    },
    {
        id: "5",
        Image: "user-05.jpg",
        Username: "Lilly",
        Phone_Number: "+1 83610 45175",
        Icon: "video",
        Class: "income-success me-1",
        Call_Type: "Outgoing Call",
        Duration: "0.45",
        Date_Time: "14 Mar 2023 - 09:12 AM"
    },
    {
        id: "6",
        Image: "user-08.jpg",
        Username: "Freda",
        Phone_Number: "+1 46217 84294",
        Icon: "phone-incoming",
        Class: "income-success me-1",
        Call_Type: "Incoming Call",
        Duration: "0.3",
        Date_Time: "27 Mar 2023 - 04:32 PM"
    },
    {
        id: "7",
        Image: "user-06.jpg",
        Username: "Alwin",
        Phone_Number: "+1 62573 84301",
        Icon: "phone-outgoing",
        Class: "income-success me-1",
        Call_Type: "Outgoing Call",
        Duration: "1.17",
        Date_Time: "13 Apr 2023 - 02:46 PM"
    },
    {
        id: "8",
        Image: "user-07.jpg",
        Username: "Maybelle",
        Phone_Number: "+1 14693 63826",
        Icon: "video",
        Arrow_icon: "arrow-down-left",
        Class: "income-success-missed me-1",
        Call_Type: "Missed Call",
        Duration: "0",
        Date_Time: "11 Apr 2023 - 10:29 AM"
    },
    {
        id: "9",
        Image: "user-10.jpg",
        Username: "Ellen",
        Phone_Number: "+1 83710 43827",
        Icon: "phone-incoming",
        Arrow_icon: "arrow-down-left",
        Class: "income-success me-1",
        Call_Type: "Incoming Call",
        Duration: "0.5",
        Date_Time: "14 May 2023 - 03:06 PM",
    },
    {
        id: "",
        Image: "user-12.jpg",
        Username: "Grace",
        Phone_Number: "+1 42695 07322",
        Icon: "video",
        Class: "income-success-missed me-1",
        Call_Type: "Missed Call",
        Duration: "0",
        Date_Time: "29 May 2023 - 11:23 AM"
    }
]


export default {
    data() {
        return {
            columns,
            data,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/assets/img/users/${imageName}`, import.meta.url).href;
        },
    }
}
</script>