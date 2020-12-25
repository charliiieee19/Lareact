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
      $page = $request->get('page');
      $perpage = $request->get('perpage');
      $offset = $perpage * ($page - 1);
      $string = 'SELECT studNo, fname, mname, lname FROM students ORDER BY fname ASC LIMIT ' . $offset . ',' . $perpage;

      $query = DB::select(
         'SELECT SQNC, studNo, fname, mname, lname FROM students ORDER BY lname ASC LIMIT ' . $offset . ',' . $perpage
      );

      $qTotalRows = DB::select('SELECT COUNT(*) AS "Total" FROM students');

      $res = array(
         'totalRows' => $qTotalRows[0]->Total,
         'data' => $query,
         'q' => $string
      );
      return json_encode($res);
   }
}
