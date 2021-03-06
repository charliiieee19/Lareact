<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
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
               ORDER BY lname ASC LIMIT ' . $offset . ',' . $perpage;

         $qTotalRows = 'SELECT COUNT(*) AS "Total" FROM students 
               WHERE studNo LIKE "%' . $key . '%" 
               OR lname LIKE "%' . $key . '%" 
               OR fname LIKE "%' . $key . '%" 
               OR mname LIKE "%' . $key . '%" 
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

   public function GetStudentRequests()
   {
      $session = session('isLoggedIn');
      $qRequests = DB::select('SELECT * FROM schedules1 WHERE studentID = ?', array($session[0]->StudentID));

      $res = array(
         'Requests' => $qRequests
      );

      return json_encode($res);
   }
}
