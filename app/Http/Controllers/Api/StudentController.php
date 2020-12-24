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
}
