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
          $this->load->view('login');
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
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('keyToSuccess');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function careerGuidanceHelp()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('careerGuidanceHelp');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function careerJourney()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('careerJourney');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function counseling()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('counseling');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function successStory()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('successStory');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function showStory()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('showStory');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function aboutUsContent()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('aboutUsContent');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function aboutUsInner()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('aboutUsInner');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function educationLogo()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('educationLogo');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function ourTeamMember()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('ourTeamMember');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function blog()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('blogs');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function blogInner()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('blogInner');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function careerArticle()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('careerArticle');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function show_articles()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('showArticles');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function serveyContent()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('servey');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function surveyFormDetails()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('surveyFormDetails');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function show_question()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('show_question');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function show_answer()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('answer');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function questionnaire()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('questionnaire');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function term()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('term');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function termInner()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('termInner');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function terms_conditions()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('terms_conditions');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function showTerms()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('showTerms');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function contactUs()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('contactUs');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }
    public function contactUsDetails()
    {
        if($this->session->userData('isAlreadyLogin')=="true")
        {
          $this->load->view('header');
          $this->load->view('sidebar');
          $this->load->view('contactUsDetails');
          $this->load->view('footer');
        }
        else
        {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');
        }
    }

    public function logout()
    {
       $this->session->sess_destroy();
    }
    
}