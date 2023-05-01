<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Coupon extends CI_Controller
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
           $this->load->view('coupon');
           $this->load->view('footer');
         }
         else
         {
           $this->load->view('header');
           $this->load->view('login');
           $this->load->view('footer');
         }
     }
     public function addCoupon()
     {
         if($this->session->userData('isAlreadyLogin')=="true")
         {
           $this->load->view('header');
           $this->load->view('sidebar');
           $this->load->view('addCoupon');
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