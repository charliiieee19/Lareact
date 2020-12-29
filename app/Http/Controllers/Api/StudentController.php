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
      return json_encode(session('isLoggedIn'));
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
}
