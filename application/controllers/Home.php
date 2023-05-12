<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
     {
          parent::__construct();
          $this->load->helper('url');
		$this->load->library('session');
          $this->conn = "";
    }

    public function set_session()
    {
          $userData = array();
          $userData = array(
               'email' => $_POST["email"],
               'password' => $_POST["password"],
          );
          $this->session->set_userData('isAlreadyLogin','true');
          $this->session->set_userData('userData', $userData);
          echo json_encode($this->session->userData('userData'));
    }
    public function sign_in()
    {
        $email  = $this->input->post('email');
        $password   = $this->input->post('password');
    }
    // it will change when login is successful 
    public function index()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('home');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('home');
          $this->load->view('footer');
        }
    }
    public function userData()
	{
          
        $data = array(
            'id' => $this->input->post('id'),
			'name'=>$this->input->post('name'),
			'email'=>$this->input->post('email'),
			'image'=>$this->input->post('image'),
               'address'=>$this->input->post('address'),
			'status'=>$this->input->post('status'),
               'user_full_name'=>$this->input->post('user_full_name'),
			
			);

        $this->load->view('userdata', $data);
    }


    public function keyToSuccess()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('keyToSuccess');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function careerGuidanceHelp()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('careerGuidanceHelp');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function careerJourney()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('careerJourney');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function counseling()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('counseling');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function successStory()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('successStory');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function showStory()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('showStory');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }
    public function aboutUsContent()
    {
        // if($this->session->userData('isAlreadyLogin')=="true")
        // {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('aboutUsContent');
          $this->load->view('footer');
        // }
        // else
        // {
        //   $this->load->view('header');
        //   $this->load->view('login');
        //   $this->load->view('footer');
        // }
    }

    public function logout()
    {
       $this->session->sess_destroy();
    }
    
}