<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class ApiController extends Controller
{
   public function Login(Request $request)
   {
      $query = DB::select(
         'CALL sp_Login(?, ?)',
         array($request->post('Username'), md5($request->post('Password')))
      );

      if ($query[0]->Message === "1") {
         session(['isLoggedIn' => $query]);
      }

      return json_encode($query);
   }

   public function Logout()
   {
      session()->forget('isLoggedIn');
   }

   public function SessionCheck()
   {

      if (session('isLoggedIn')) {
         $res = session('isLoggedIn');
      } else {
         $res = false;
      }

      return json_encode($res);
   }

   public function UserList()
   {
      $query = DB::select('SELECT * FROM students');

      return json_encode($query);
   }

   public function UserList2(Request $request)
   {
      $query = '';
      $qTotalRows = '';
      $page = $request->get('page');
      $perpage = $request->get('perpage');
      $offset = $perpage * ($page - 1);
      $key = $request->get('key');

      if ($key === "") {
         $query = 'SELECT SQNC, studNo, fname, mname, lname FROM students ORDER BY lname ASC LIMIT ' . $offset . ',' . $perpage;
         $qTotalRows = 'SELECT COUNT(*) AS "Total" FROM students';
      } else {
         $query = 'SELECT SQNC, studNo, fname, mname, lname FROM students 
               WHERE studNo LIKE "%' . $key . '%" 
               OR lname LIKE "%' . $key . '%" 
               OR fname LIKE "%' . $key . '%" 
               OR mname LIKE "%' . $key . '%" 
               OR address LIKE "%' . $key . '%" 
               OR college LIKE "%' . $key . '%" 
               OR course LIKE "%' . $key . '%" 
               ORDER BY lname ASC LIMIT ' . $offset . ',' . $perpage;

         $qTotalRows = 'SELECT COUNT(*) AS "Total" FROM students 
               WHERE studNo LIKE "%' . $key . '%" 
               OR lname LIKE "%' . $key . '%" 
               OR fname LIKE "%' . $key . '%" 
               OR mname LIKE "%' . $key . '%" 
               OR college LIKE "%' . $key . '%" 
               OR course LIKE "%' . $key . '%" 
               OR address LIKE "%' . $key . '%" ';
      }

      $sql = DB::select($query);
      $sqlTotalRow = DB::select($qTotalRows);

      $res = array(
         'totalRows' => $sqlTotalRow[0]->Total,
         'data' => $sql,
         'q' => $query
      );

      return json_encode($res);
   }

   public function GetUserInfo(Request $request)
   {
      $SQNC = $request->post('SQNC');

      $sql = DB::select('SELECT * FROM students WHERE SQNC = ?', array($SQNC));

      $res = array(
         'success' => true,
         'data' => $sql
      );

      return json_encode($res);
   }

   public function GetDashboardCounts()
   {
      $qApproved = DB::select('SELECT COUNT(*) AS "Count" FROM schedules1 WHERE Status = "Approved"; ');
      $qDisapproved = DB::select('SELECT COUNT(*) AS "Count" FROM schedules1 WHERE Status = "Disapproved"; ');
      $qPending = DB::select('SELECT COUNT(*) AS "Count" FROM schedules1 WHERE Status = "Pending"; ');

      $res = array(
         'Approved' => $qApproved,
         'Disapproved' => $qDisapproved,
         'Pending' => $qPending,
      );

      return json_encode($res);
   }

   public function UserInfoDropdown()
   {
      $qCourses = DB::select('SELECT * FROM courses');
      $qColleges = DB::select('SELECT * FROM colleges');

      $res = array(
         'Courses' => $qCourses,
         'Colleges' => $qColleges
      );

      return json_encode($res);
   }

   public function RequestsDropdown()
   {
      $qRooms = DB::select('SELECT * FROM rooms');

      $res = array(
         'Rooms' => $qRooms
      );

      return json_encode($res);
   }

   public function GetRequests(Request $request)
   {
      $StartDate = $request->post('StartDate');
      $EndDate = $request->post('EndDate');
      $Room = $request->post('Room');
      $Type = $request->post('Type');

      $qRooms = DB::select(
         'CALL sp_GetRequests(?, ?, ?, ?)',
         array($StartDate, $EndDate, $Room, $Type)
      );

      $res = array(
         'Requests' => $qRooms
      );

      return json_encode($res);
   }

   public function GetRequests_Student(Request $request)
   {
      $StartDate = $request->post('StartDate');
      $EndDate = $request->post('EndDate');
      $Room = $request->post('Room');

      $qRooms = DB::select(
         'CALL sp_GetRequests_Student(?, ?, ?)',
         array($StartDate, $EndDate, $Room)
      );

      $res = array(
         'Requests' => $qRooms
      );

      return json_encode($res);
   }

   public function GetStudentRequests()
   {
      if (session('isLoggedIn')) {
         $session = session('isLoggedIn');
         $qRequests = DB::select('SELECT * FROM schedules1 WHERE studentID = ?', array($session[0]->StudentID));

         $res = array(
            'Requests' => $qRequests
         );
      } else {
         $res = array(
            'Requests' => array()
         );
      }

      return json_encode($res);
   }

   public function CheckConflictSchedules(Request $request)
   {
      $Date = $request->post('Date');
      $Room = $request->post('Room');
      $StartTime = $request->post('StartTime');
      $EndTime = $request->post('EndTime');

      $qCheckConflict = DB::select(
         'CALL sp_CheckConflict1(?, ?, ?, ?)',
         array($Date, $Room, $StartTime, $EndTime)
      );

      $res = array(
         'data' => $qCheckConflict
      );

      return json_encode($res);
   }
   public function SubmitRequest(Request $request)
   {
      if (session('isLoggedIn')) {
         $StudentID = session('isLoggedIn')[0]->StudentID;
         $Subject = $request->post('Subject');
         $Instructor = $request->post('Instructor');
         $Date = $request->post('Date');
         $StartTime = $request->post('StartTime');
         $EndTime = $request->post('EndTime');
         $Room = $request->post('Room');
         $NoOfPersons = $request->post('NoOfPersons');
         $Purpose = $request->post('Purpose');
         $Equipments = $request->post('Equipments');

         try {
            DB::select(
               'CALL sp_SubmitRequest(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
               array(
                  $StudentID,
                  $Subject,
                  $Instructor,
                  $Date,
                  $StartTime,
                  $EndTime,
                  $Room,
                  $NoOfPersons,
                  $Purpose,
                  $Equipments
               )
            );

            $res = array(
               'success' => true
            );
         } catch (\Illuminate\Database\QueryException $e) {
            $res = array(
               'success' => false,
               'message' => $e->getMessage()
            );
         }
      } else {
         $res = array(
            'success' => false,
            'message' => 'Session Expired'
         );
      }

      return json_encode($res);
   }

   public function ApproveRequest(Request $request)
   {
      if (session('isLoggedIn')) {
         $UserID = session('isLoggedIn')[0]->StudentID;
         $ScheduleID = $request->post('ScheduleID');

         try {
            DB::select(
               'CALL sp_ApproveRequest(?, ?)',
               array(
                  $UserID,
                  $ScheduleID
               )
            );

            $res = array(
               'success' => true
            );
         } catch (\Illuminate\Database\QueryException $e) {
            $res = array(
               'success' => false,
               'message' => $e->getMessage()
            );
         }
      } else {
         $res = array(
            'success' => false,
            'message' => 'Session Expired'
         );
      }

      return json_encode($res);
   }

   public function DisapproveRequest(Request $request)
   {
      if (session('isLoggedIn')) {
         $UserID = session('isLoggedIn')[0]->StudentID;
         $ScheduleID = $request->post('ScheduleID');

         try {
            DB::select(
               'CALL sp_DisapproveRequest(?, ?)',
               array(
                  $UserID,
                  $ScheduleID
               )
            );

            $res = array(
               'success' => true
            );
         } catch (\Illuminate\Database\QueryException $e) {
            $res = array(
               'success' => false,
               'message' => $e->getMessage()
            );
         }
      } else {
         $res = array(
            'success' => false,
            'message' => 'Session Expired'
         );
      }

      return json_encode($res);
   }

   public function GetRequestDetails(Request $request)
   {
      if (session('isLoggedIn')) {
         $ScheduleID = $request->post('ScheduleID');

         try {
            $sql = DB::select(
               'CALL sp_GetRequestDetails(?)',
               array(
                  $ScheduleID
               )
            );

            $res = array(
               'success' => true,
               'data' => $sql
            );
         } catch (\Illuminate\Database\QueryException $e) {
            $res = array(
               'success' => false,
               'message' => $e->getMessage()
            );
         }
      } else {
         $res = array(
            'success' => false,
            'message' => 'Session Expired'
         );
      }

      return json_encode($res);
   }

   public function InsertVisits()
   {
      // $Browser = $request->post('Browser');
      // $IP = $request->post('IP');

      $user_agent = $_SERVER['HTTP_USER_AGENT'];
      $ip_address = $_SERVER["REMOTE_ADDR"];
      $page_name = $_SERVER["SCRIPT_NAME"];
      $current_page = $page_name;

      try {
         DB::select(
            'CALL sp_InsertVisits(?, ?)',
            array($user_agent, $ip_address)
         );

         $res = array(
            'success' => true
         );
      } catch (\Illuminate\Database\QueryException $e) {
         $res = array(
            'success' => false,
            'message' => $e->getMessage()
         );
      }

      return json_encode($res);
   }

   public function GetVisits()
   {
      try {
         $sql = DB::select('CALL sp_GetVisits()');

         $res = array(
            'success' => true,
            'data' => $sql
         );
      } catch (\Illuminate\Database\QueryException $e) {
         $res = array(
            'success' => false,
            'message' => $e->getMessage()
         );
      }

      return json_encode($res);
   }
}
