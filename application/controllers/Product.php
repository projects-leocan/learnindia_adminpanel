<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Product extends CI_Controller
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
         if($this->session->userData('isAlreadyLogin')=="true")
         {
           $this->load->view('header');
           $this->load->view('sidebar');
           $this->load->view('product');
           $this->load->view('footer');
         }
         else
         {
           $this->load->view('header');
           $this->load->view('login');
           $this->load->view('footer');
         }
     }
     public function addProduct()
     {
         if($this->session->userData('isAlreadyLogin')=="true")
         {
           $this->load->view('header');
           $this->load->view('sidebar');
           $this->load->view('addProduct');
           $this->load->view('footer');
         }
         else
         {
           $this->load->view('header');
           $this->load->view('login');
           $this->load->view('footer');
         }
     }

     
}

?>