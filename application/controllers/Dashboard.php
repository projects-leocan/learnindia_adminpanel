<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Dashboard extends CI_Controller
{

     public function __construct()
     {
          parent::__construct();
          $this->load->helper('url');
          $this->load->library('session');
          $this->conn = "";
     }

     public function index()
     {
          $this->load->view('header');
          $this->load->view('login');
          $this->load->view('footer');

     }

     
}