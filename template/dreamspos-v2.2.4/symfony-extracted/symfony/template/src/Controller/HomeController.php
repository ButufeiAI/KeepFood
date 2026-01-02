<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;

class HomeController extends AbstractController
{
    public function __construct(Environment $twig)
    {
        $this->loader = $twig->getLoader();
    }

    #[Route('/', name: 'home')]
    public function home(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/index', name: 'index')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/account-list', name: 'account-list')]
    public function accountList(): Response
    {
        return $this->render('account-list.html.twig');
    }

    #[Route('/account-statement', name: 'account-statement')]
    public function accountStatement(): Response
    {
        return $this->render('account-statement.html.twig');
    }

    #[Route('/activities', name: 'activities')]
    public function activities(): Response
    {
        return $this->render('activities.html.twig');
    }

    #[Route('/add-employee', name: 'add-employee')]
    public function addEmployee(): Response
    {
        return $this->render('add-employee.html.twig');
    }

    #[Route('/add-product', name: 'add-product')]
    public function addProduct(): Response
    {
        return $this->render('add-product.html.twig');
    }

    #[Route('/admin-dashboard', name: 'admin-dashboard')]
    public function adminDashboard(): Response
    {
        return $this->render('admin-dashboard.html.twig');
    }

    #[Route('/all-blog', name: 'all-blog')]
    public function allBlog(): Response
    {
        return $this->render('all-blog.html.twig');
    }

    #[Route('/annual-report', name: 'annual-report')]
    public function annualReport(): Response
    {
        return $this->render('annual-report.html.twig');
    }

    #[Route('/appearance', name: 'appearance')]
    public function appearance(): Response
    {
        return $this->render('appearance.html.twig');
    }

    #[Route('/attendance-admin', name: 'attendance-admin')]
    public function attendanceAdmin(): Response
    {
        return $this->render('attendance-admin.html.twig');
    }

    #[Route('/attendance-employee', name: 'attendance-employee')]
    public function attendanceEmployee(): Response
    {
        return $this->render('attendance-employee.html.twig');
    }

    #[Route('/audio-call', name: 'audio-call')]
    public function audioCall(): Response
    {
        return $this->render('audio-call.html.twig');
    }

    #[Route('/balance-sheet', name: 'balance-sheet')]
    public function balanceSheet(): Response
    {
        return $this->render('balance-sheet.html.twig');
    }

    #[Route('/balance-sheet-v2', name: 'balance-sheet-v2')]
    public function balanceSheetV2(): Response
    {
        return $this->render('balance-sheet-v2.html.twig');
    }

    #[Route('/ban-ip-address', name: 'ban-ip-address')]
    public function banIpAddress(): Response
    {
        return $this->render('ban-ip-address.html.twig');
    }

    #[Route('/bank-settings-grid', name: 'bank-settings-grid')]
    public function bankSettingsGrid(): Response
    {
        return $this->render('bank-settings-grid.html.twig');
    }

    #[Route('/bank-settings-list', name: 'bank-settings-list')]
    public function bankSettingsList(): Response
    {
        return $this->render('bank-settings-list.html.twig');
    }     

    #[Route('/barcode', name: 'barcode')]
    public function barcode(): Response
    {
        return $this->render('barcode.html.twig');
    }   

    #[Route('/best-seller', name: 'best-seller')]
    public function bestSeller(): Response
    {
        return $this->render('best-seller.html.twig');
    }   

    #[Route('/billers', name: 'billers')]
    public function billers(): Response
    {
        return $this->render('billers.html.twig');
    }   

    #[Route('/blank-page', name: 'blank-page')]
    public function blankPage(): Response
    {
        return $this->render('blank-page.html.twig');
    }   

    #[Route('/blog-categories', name: 'blog-categories')]
    public function blogCategories(): Response
    {
        return $this->render('blog-categories.html.twig');
    }   

    #[Route('/blog-comments', name: 'blog-comments')]
    public function blogComments(): Response
    {
        return $this->render('blog-comments.html.twig');
    }   

    #[Route('/blog-tag', name: 'blog-tag')]
    public function blogTag(): Response
    {
        return $this->render('blog-tag.html.twig');
    }   

    #[Route('/blog-details', name: 'blog-details')]
    public function blogDetails(): Response
    {
        return $this->render('blog-details.html.twig');
    }   

    #[Route('/brand-list', name: 'brand-list')]
    public function brandList(): Response
    {
        return $this->render('brand-list.html.twig');
    }   

    #[Route('/calendar', name: 'calendar')]
    public function calendar(): Response
    {
        return $this->render('calendar.html.twig');
    }   

    #[Route('/call-history', name: 'call-history')]
    public function callHistory(): Response
    {
        return $this->render('call-history.html.twig');
    }   

    #[Route('/cart', name: 'cart')]
    public function cart(): Response
    {
        return $this->render('cart.html.twig');
    }     

    #[Route('/companies', name: 'companies')]
    public function companies(): Response
    {
        return $this->render('companies.html.twig');
    }   

    #[Route('/category-list', name: 'category-list')]
    public function categoryList(): Response
    {
        return $this->render('category-list.html.twig');
    }     

    #[Route('/cash-flow', name: 'cash-flow')]
    public function cashFlow(): Response
    {
        return $this->render('cash-flow.html.twig');
    }     

    #[Route('/cash-flow-v2', name: 'cash-flow-v2')]
    public function cashFlowV2(): Response
    {
        return $this->render('cash-flow-v2.html.twig');
    }     

    #[Route('/chart-apex', name: 'chart-apex')]
    public function chartApex(): Response
    {
        return $this->render('chart-apex.html.twig');
    }     

    #[Route('/chart-c3', name: 'chart-c3')]
    public function chartC3(): Response
    {
        return $this->render('chart-c3.html.twig');
    }     

    #[Route('/chart-flot', name: 'chart-flot')]
    public function chartFlot(): Response
    {
        return $this->render('chart-flot.html.twig');
    }     

    #[Route('/chart-js', name: 'chart-js')]
    public function chartJs(): Response
    {
        return $this->render('chart-js.html.twig');
    }     

    #[Route('/chart-morris', name: 'chart-morris')]
    public function chartMorris(): Response
    {
        return $this->render('chart-morris.html.twig');
    }     

    #[Route('/chart-peity', name: 'chart-peity')]
    public function chartPeity(): Response
    {
        return $this->render('chart-peity.html.twig');
    }    

    #[Route('/chat', name: 'chat')]
    public function chat(): Response
    {
        return $this->render('chat.html.twig');
    }    
    
    #[Route('/checkout', name: 'checkout')]
    public function checkout(): Response
    {
        return $this->render('checkout.html.twig');
    }    

    #[Route('/cities', name: 'cities')]
    public function cities(): Response
    {
        return $this->render('cities.html.twig');
    }    

    #[Route('/coming-soon', name: 'coming-soon')]
    public function comingSoon(): Response
    {
        return $this->render('coming-soon.html.twig');
    }    

    #[Route('/company-settings', name: 'company-settings')]
    public function companySettings(): Response
    {
        return $this->render('company-settings.html.twig');
    } 
    
    #[Route('/connected-apps', name: 'connected-apps')]
    public function connectedApps(): Response
    {
        return $this->render('connected-apps.html.twig');
    }     

    #[Route('/contacts', name: 'contacts')]
    public function contacts(): Response
    {
        return $this->render('contacts.html.twig');
    }     

    #[Route('/countries', name: 'countries')]
    public function countries(): Response
    {
        return $this->render('countries.html.twig');
    }     

    #[Route('/coupons', name: 'coupons')]
    public function coupons(): Response
    {
        return $this->render('coupons.html.twig');
    }     

    #[Route('/currency-settings', name: 'currency-settings')]
    public function currencySettings(): Response
    {
        return $this->render('currency-settings.html.twig');
    }     

    #[Route('/customer-due-report', name: 'customer-due-report')]
    public function customerDueReport(): Response
    {
        return $this->render('customer-due-report.html.twig');
    }     

    #[Route('/customer-report', name: 'customer-report')]
    public function customerReport(): Response
    {
        return $this->render('customer-report.html.twig');
    }  

    #[Route('/customers', name: 'customers')]
    public function customers(): Response
    {
        return $this->render('customers.html.twig');
    }  

    #[Route('/custom-fields', name: 'custom-fields')]
    public function customFields(): Response
    {
        return $this->render('custom-fields.html.twig');
    }  

    #[Route('/data-tables', name: 'data-tables')]
    public function dataTables(): Response
    {
        return $this->render('data-tables.html.twig');
    }  

    #[Route('/dashboard', name: 'dashboard')]
    public function dashboard(): Response
    {
        return $this->render('dashboard.html.twig');
    }  

    #[Route('/delete-account', name: 'delete-account')]
    public function deleteAccount(): Response
    {
        return $this->render('delete-account.html.twig');
    }  

    #[Route('/department-grid', name: 'department-grid')]
    public function departmentGrid(): Response
    {
        return $this->render('department-grid.html.twig');
    }  

    #[Route('/department-list', name: 'department-list')]
    public function departmentList(): Response
    {
        return $this->render('department-list.html.twig');
    }  

    #[Route('/designation', name: 'designation')]
    public function designation(): Response
    {
        return $this->render('designation.html.twig');
    }  

    #[Route('/discount', name: 'discount')]
    public function discount(): Response
    {
        return $this->render('discount.html.twig');
    }  

    #[Route('/discount-plan', name: 'discount-plan')]
    public function discountPlan(): Response
    {
        return $this->render('discount-plan.html.twig');
    }  

    #[Route('/domain', name: 'domain')]
    public function domain(): Response
    {
        return $this->render('domain.html.twig');
    }  

    #[Route('/edit-employee', name: 'edit-employee')]
    public function editEmployee(): Response
    {
        return $this->render('edit-employee.html.twig');
    }  

    #[Route('/edit-product', name: 'edit-product')]
    public function editProduct(): Response
    {
        return $this->render('edit-product.html.twig');
    }  

    #[Route('/email', name: 'email')]
    public function email(): Response
    {
        return $this->render('email.html.twig');
    }  

    #[Route('/email-reply', name: 'email-reply')]
    public function emailReply(): Response
    {
        return $this->render('email-reply.html.twig');
    }  

    #[Route('/email-settings', name: 'email-settings')]
    public function emailSettings(): Response
    {
        return $this->render('email-settings.html.twig');
    }  

    #[Route('/email-templates', name: 'email-templates')]
    public function emailTemplates(): Response
    {
        return $this->render('email-templates.html.twig');
    }  

    #[Route('/email-verification', name: 'email-verification')]
    public function emailVerification(): Response
    {
        return $this->render('email-verification.html.twig');
    }  

    #[Route('/email-verification-2', name: 'email-verification-2')]
    public function emailVerification2(): Response
    {
        return $this->render('email-verification-2.html.twig');
    }  

    #[Route('/email-verification-3', name: 'email-verification-3')]
    public function emailVerification3(): Response
    {
        return $this->render('email-verification-3.html.twig');
    }  

    #[Route('/employee-details', name: 'employee-details')]
    public function employeeDetails(): Response
    {
        return $this->render('employee-details.html.twig');
    }      

    #[Route('/employee-salary', name: 'employee-salary')]
    public function employeeSalary(): Response
    {
        return $this->render('employee-salary.html.twig');
    }  

    #[Route('/employees-grid', name: 'employees-grid')]
    public function employeesGrid(): Response
    {
        return $this->render('employees-grid.html.twig');
    }  

    #[Route('/employees-list', name: 'employees-list')]
    public function employeesList(): Response
    {
        return $this->render('employees-list.html.twig');
    }  

    #[Route('/error-404', name: 'error-404')]
    public function error404(): Response
    {
        return $this->render('error-404.html.twig');
    }  

    #[Route('/error-500', name: 'error-500')]
    public function error500(): Response
    {
        return $this->render('error-500.html.twig');
    }  

    #[Route('/expense-category', name: 'expense-category')]
    public function expenseCategory(): Response
    {
        return $this->render('expense-category.html.twig');
    }  

    #[Route('/expense-list', name: 'expense-list')]
    public function expenseList(): Response
    {
        return $this->render('expense-list.html.twig');
    }  

    #[Route('/expense-report', name: 'expense-report')]
    public function expenseReport(): Response
    {
        return $this->render('expense-report.html.twig');
    }  

    #[Route('/expired-products', name: 'expired-products')]
    public function expiredProducts(): Response
    {
        return $this->render('expired-products.html.twig');
    }  

    #[Route('/faq', name: 'faq')]
    public function faq(): Response
    {
        return $this->render('faq.html.twig');
    }  

    #[Route('/file-archived', name: 'file-archived')]
    public function fileArchived(): Response
    {
        return $this->render('file-archived.html.twig');
    }  

    #[Route('/file-document', name: 'file-document')]
    public function fileDocument(): Response
    {
        return $this->render('file-document.html.twig');
    }  

    #[Route('/file-favourites', name: 'file-favourites')]
    public function fileFavourites(): Response
    {
        return $this->render('file-favourites.html.twig');
    }  

    #[Route('/file-manager', name: 'file-manager')]
    public function fileManager(): Response
    {
        return $this->render('file-manager.html.twig');
    }  

    #[Route('/file-manager-deleted', name: 'file-manager-deleted')]
    public function fileManagerDeleted(): Response
    {
        return $this->render('file-manager-deleted.html.twig');
    }  

    #[Route('/file-recent', name: 'file-recent')]
    public function fileRecent(): Response
    {
        return $this->render('file-recent.html.twig');
    }  

    #[Route('/file-shared', name: 'file-shared')]
    public function fileShared(): Response
    {
        return $this->render('file-shared.html.twig');
    }  

    #[Route('/form-basic-inputs', name: 'form-basic-inputs')]
    public function formBasicInputs(): Response
    {
        return $this->render('form-basic-inputs.html.twig');
    }  

    #[Route('/form-checkbox-radios', name: 'form-checkbox-radios')]
    public function formCheckboxRadios(): Response
    {
        return $this->render('form-checkbox-radios.html.twig');
    }  

    #[Route('/form-elements', name: 'form-elements')]
    public function formElements(): Response
    {
        return $this->render('form-elements.html.twig');
    }  

    #[Route('/form-fileupload', name: 'form-fileupload')]
    public function formFileupload(): Response
    {
        return $this->render('form-fileupload.html.twig');
    }  

    #[Route('/form-floating-labels', name: 'form-floating-labels')]
    public function formFloatingLabels(): Response
    {
        return $this->render('form-floating-labels.html.twig');
    }  

    #[Route('/form-grid-gutters', name: 'form-grid-gutters')]
    public function formGridGutters(): Response
    {
        return $this->render('form-grid-gutters.html.twig');
    }      

    #[Route('/form-horizontal', name: 'form-horizontal')]
    public function formHorizontal(): Response
    {
        return $this->render('form-horizontal.html.twig');
    } 

    #[Route('/form-input-groups', name: 'form-input-groups')]
    public function formInputGroups(): Response
    {
        return $this->render('form-input-groups.html.twig');
    } 

    #[Route('/form-mask', name: 'form-mask')]
    public function formMask(): Response
    {
        return $this->render('form-mask.html.twig');
    } 

    #[Route('/form-pickers', name: 'form-pickers')]
    public function formPickers(): Response
    {
        return $this->render('form-pickers.html.twig');
    } 

    #[Route('/form-select', name: 'form-select')]
    public function formSelect(): Response
    {
        return $this->render('form-select.html.twig');
    } 

    #[Route('/form-select2', name: 'form-select2')]
    public function formSelect2(): Response
    {
        return $this->render('form-select2.html.twig');
    } 

    #[Route('/form-validation', name: 'form-validation')]
    public function formValidation(): Response
    {
        return $this->render('form-validation.html.twig');
    } 

    #[Route('/form-vertical', name: 'form-vertical')]
    public function formVertical(): Response
    {
        return $this->render('form-vertical.html.twig');
    } 

    #[Route('/form-wizard', name: 'form-wizard')]
    public function formWizard(): Response
    {
        return $this->render('form-wizard.html.twig');
    } 
    
    #[Route('/forgot-password', name: 'forgot-password')]
    public function forgotPassword(): Response
    {
        return $this->render('forgot-password.html.twig');
    } 
    
    #[Route('/forgot-password-2', name: 'forgot-password-2')]
    public function forgotPassword2(): Response
    {
        return $this->render('forgot-password-2.html.twig');
    } 
    
    #[Route('/forgot-password-3', name: 'forgot-password-3')]
    public function forgotPassword3(): Response
    {
        return $this->render('forgot-password-3.html.twig');
    } 
    
    #[Route('/gdpr-settings', name: 'gdpr-settings')]
    public function gdprSettings(): Response
    {
        return $this->render('gdpr-settings.html.twig');
    } 
    
    #[Route('/general-settings', name: 'general-settings')]
    public function generalSettings(): Response
    {
        return $this->render('general-settings.html.twig');
    } 
    
    #[Route('/gift-cards', name: 'gift-cards')]
    public function giftCards(): Response
    {
        return $this->render('gift-cards.html.twig');
    } 
    
    #[Route('/holidays', name: 'holidays')]
    public function holidays(): Response
    {
        return $this->render('holidays.html.twig');
    } 
    
    #[Route('/icon-bootstrap', name: 'icon-bootstrap')]
    public function iconBootstrap(): Response
    {
        return $this->render('icon-bootstrap.html.twig');
    } 

    #[Route('/icon-feather', name: 'icon-feather')]
    public function iconFeather(): Response
    {
        return $this->render('icon-feather.html.twig');
    }     
    
    #[Route('/icon-flag', name: 'icon-flag')]
    public function iconFlag(): Response
    {
        return $this->render('icon-flag.html.twig');
    }     
    
    #[Route('/icon-fontawesome', name: 'icon-fontawesome')]
    public function iconFontawesome(): Response
    {
        return $this->render('icon-fontawesome.html.twig');
    }     
    
    #[Route('/icon-ionic', name: 'icon-ionic')]
    public function iconIonic(): Response
    {
        return $this->render('icon-ionic.html.twig');
    }     
    
    #[Route('/icon-material', name: 'icon-material')]
    public function iconMaterial(): Response
    {
        return $this->render('icon-material.html.twig');
    }     
    
    #[Route('/icon-pe7', name: 'icon-pe7')]
    public function iconPe7(): Response
    {
        return $this->render('icon-pe7.html.twig');
    }     

    #[Route('/icon-remix', name: 'icon-remix')]
    public function iconRemix(): Response
    {
        return $this->render('icon-remix.html.twig');
    }     
    
    #[Route('/icon-simpleline', name: 'icon-simpleline')]
    public function iconSimpleline(): Response
    {
        return $this->render('icon-simpleline.html.twig');
    }     
    
    #[Route('/icon-tabler', name: 'icon-tabler')]
    public function iconTabler(): Response
    {
        return $this->render('icon-tabler.html.twig');
    }     
    
    #[Route('/icon-themify', name: 'icon-themify')]
    public function iconThemify(): Response
    {
        return $this->render('icon-themify.html.twig');
    }     
    
    #[Route('/icon-typicon', name: 'icon-typicon')]
    public function iconTypicon(): Response
    {
        return $this->render('icon-typicon.html.twig');
    }     
    
    #[Route('/icon-weather', name: 'icon-weather')]
    public function iconWeather(): Response
    {
        return $this->render('icon-weather.html.twig');
    }     
    #[Route('/income', name: 'income')]
    public function income(): Response
    {
        return $this->render('income.html.twig');
    }       
    #[Route('/income-category', name: 'income-category')]
    public function incomeCategory(): Response
    {
        return $this->render('income-category.html.twig');
    }       
    #[Route('/income-report', name: 'income-report')]
    public function incomeReport(): Response
    {
        return $this->render('income-report.html.twig');
    }       

    #[Route('/inventory-report', name: 'inventory-report')]
    public function inventoryReport(): Response
    {
        return $this->render('inventory-report.html.twig');
    }       
    #[Route('/invoice', name: 'invoice')]
    public function invoice(): Response
    {
        return $this->render('invoice.html.twig');
    }       
    #[Route('/invoice-details', name: 'invoice-details')]
    public function invoiceDetails(): Response
    {
        return $this->render('invoice-details.html.twig');
    }       
    #[Route('/invoice-report', name: 'invoice-report')]
    public function invoiceReport(): Response
    {
        return $this->render('invoice-report.html.twig');
    }       
    #[Route('/invoice-settings', name: 'invoice-settings')]
    public function invoiceSettings(): Response
    {
        return $this->render('invoice-settings.html.twig');
    }       
    #[Route('/invoice-templates', name: 'invoice-templates')]
    public function invoiceTemplates(): Response
    {
        return $this->render('invoice-templates.html.twig');
    }       
    #[Route('/language-settings', name: 'language-settings')]
    public function languageSettings(): Response
    {
        return $this->render('language-settings.html.twig');
    }       
    #[Route('/language-settings-web', name: 'language-settings-web')]
    public function languageSettingsWeb(): Response
    {
        return $this->render('language-settings-web.html.twig');
    }       
    #[Route('/layout-boxed', name: 'layout-boxed')]
    public function layoutBoxed(): Response
    {
        return $this->render('layout-boxed.html.twig');
    }       
    #[Route('/layout-dark', name: 'layout-dark')]
    public function layoutDark(): Response
    {
        return $this->render('layout-dark.html.twig');
    }       
    #[Route('/layout-detached', name: 'layout-detached')]
    public function layoutDetached(): Response
    {
        return $this->render('layout-detached.html.twig');
    }       
    #[Route('/layout-horizontal', name: 'layout-horizontal')]
    public function layoutHorizontal(): Response
    {
        return $this->render('layout-horizontal.html.twig');
    }       
    #[Route('/layout-hovered', name: 'layout-hovered')]
    public function layoutHovered(): Response
    {
        return $this->render('layout-hovered.html.twig');
    }       
    #[Route('/layout-modern', name: 'layout-modern')]
    public function layoutModern(): Response
    {
        return $this->render('layout-modern.html.twig');
    }       
    #[Route('/layout-rtl', name: 'layout-rtl')]
    public function layoutRtl(): Response
    {
        return $this->render('layout-rtl.html.twig');
    }       
    #[Route('/layout-two-column', name: 'layout-two-column')]
    public function layoutTwoColumn(): Response
    {
        return $this->render('layout-two-column.html.twig');
    }       
    #[Route('/leaves-admin', name: 'leaves-admin')]
    public function leavesAdmin(): Response
    {
        return $this->render('leaves-admin.html.twig');
    }       
    #[Route('/leaves-employee', name: 'leaves-employee')]
    public function leavesEmployee(): Response
    {
        return $this->render('leaves-employee.html.twig');
    }       
    #[Route('/leave-types', name: 'leave-types')]
    public function leaveTypes(): Response
    {
        return $this->render('leave-types.html.twig');
    }       
    #[Route('/localization-settings', name: 'localization-settings')]
    public function localizationSettings(): Response
    {
        return $this->render('localization-settings.html.twig');
    }       
    #[Route('/lock-screen', name: 'lock-screen')]
    public function lockScreen(): Response
    {
        return $this->render('lock-screen.html.twig');
    }       
    #[Route('/low-stocks', name: 'low-stocks')]
    public function lowStocks(): Response
    {
        return $this->render('low-stocks.html.twig');
    }       
    #[Route('/manage-stocks', name: 'manage-stocks')]
    public function manageStocks(): Response
    {
        return $this->render('manage-stocks.html.twig');
    }       
    #[Route('/maps-leaflet', name: 'maps-leaflet')]
    public function mapsLeaflet(): Response
    {
        return $this->render('maps-leaflet.html.twig');
    }       
    #[Route('/maps-vector', name: 'maps-vector')]
    public function mapsVector(): Response
    {
        return $this->render('maps-vector.html.twig');
    }       
    #[Route('/money-transfer', name: 'money-transfer')]
    public function moneyTransfer(): Response
    {
        return $this->render('money-transfer.html.twig');
    }       
    #[Route('/notes', name: 'notes')]
    public function notes(): Response
    {
        return $this->render('notes.html.twig');
    }       
    #[Route('/notification', name: 'notification')]
    public function notification(): Response
    {
        return $this->render('notification.html.twig');
    }       
    #[Route('/online-orders', name: 'online-orders')]
    public function onlineOrders(): Response
    {
        return $this->render('online-orders.html.twig');
    }       
    #[Route('/orders', name: 'orders')]
    public function orders(): Response
    {
        return $this->render('orders.html.twig');
    }       
    #[Route('/otp-settings', name: 'otp-settings')]
    public function otpSettings(): Response
    {
        return $this->render('otp-settings.html.twig');
    }       
    #[Route('/packages', name: 'packages')]
    public function packages(): Response
    {
        return $this->render('packages.html.twig');
    }       
    #[Route('/pages', name: 'pages')]
    public function pages(): Response
    {
        return $this->render('pages.html.twig');
    }       
    #[Route('/payment-gateway-settings', name: 'payment-gateway-settings')]
    public function paymentGatewaySettings(): Response
    {
        return $this->render('payment-gateway-settings.html.twig');
    }       
    #[Route('/payroll-list', name: 'payroll-list')]
    public function payrollList(): Response
    {
        return $this->render('payroll-list.html.twig');
    }       
    #[Route('/payslip', name: 'payslip')]
    public function payslip(): Response
    {
        return $this->render('payslip.html.twig');
    }       
    #[Route('/permissions', name: 'permissions')]
    public function permissions(): Response
    {
        return $this->render('permissions.html.twig');
    }       
    #[Route('/pos', name: 'pos')]
    public function pos(): Response
    {
        return $this->render('pos.html.twig');
    }       
    #[Route('/pos-2', name: 'pos-2')]
    public function pos2(): Response
    {
        return $this->render('pos-2.html.twig');
    }       
    #[Route('/pos-3', name: 'pos-3')]
    public function pos3(): Response
    {
        return $this->render('pos-3.html.twig');
    }       
    #[Route('/pos-4', name: 'pos-4')]
    public function pos4(): Response
    {
        return $this->render('pos-4.html.twig');
    }       
    #[Route('/pos-5', name: 'pos-5')]
    public function pos5(): Response
    {
        return $this->render('pos-5.html.twig');
    }       
    #[Route('/pos-orders', name: 'pos-orders')]
    public function posOrders(): Response
    {
        return $this->render('pos-orders.html.twig');
    }       
    #[Route('/pos-settings', name: 'pos-settings')]
    public function posSettings(): Response
    {
        return $this->render('pos-settings.html.twig');
    }       
    #[Route('/preference', name: 'preference')]
    public function preference(): Response
    {
        return $this->render('preference.html.twig');
    }       
    #[Route('/prefixes', name: 'prefixes')]
    public function prefixes(): Response
    {
        return $this->render('prefixes.html.twig');
    }       
    #[Route('/printer-settings', name: 'printer-settings')]
    public function printerSettings(): Response
    {
        return $this->render('printer-settings.html.twig');
    }       
    #[Route('/pricing', name: 'pricing')]
    public function pricing(): Response
    {
        return $this->render('pricing.html.twig');
    }       
    #[Route('/product-details', name: 'product-details')]
    public function productDetails(): Response
    {
        return $this->render('product-details.html.twig');
    }       
    #[Route('/product-expiry-report', name: 'product-expiry-report')]
    public function productExpiryReport(): Response
    {
        return $this->render('product-expiry-report.html.twig');
    }       
    #[Route('/product-list', name: 'product-list')]
    public function productList(): Response
    {
        return $this->render('product-list.html.twig');
    }       
    #[Route('/product-quantity-alert', name: 'product-quantity-alert')]
    public function productQuantityAlert(): Response
    {
        return $this->render('product-quantity-alert.html.twig');
    }       
    #[Route('/product-report', name: 'product-report')]
    public function productReport(): Response
    {
        return $this->render('product-report.html.twig');
    }       
    #[Route('/products', name: 'products')]
    public function products(): Response
    {
        return $this->render('products.html.twig');
    }       
    #[Route('/profile', name: 'profile')]
    public function profile(): Response
    {
        return $this->render('profile.html.twig');
    }       
    #[Route('/profit-and-loss', name: 'profit-and-loss')]
    public function profitAndLoss(): Response
    {
        return $this->render('profit-and-loss.html.twig');
    }       
    #[Route('/projects', name: 'projects')]
    public function projects(): Response
    {
        return $this->render('projects.html.twig');
    }       
    #[Route('/purchase-list', name: 'purchase-list')]
    public function purchaseList(): Response
    {
        return $this->render('purchase-list.html.twig');
    }       
    #[Route('/purchase-order-report', name: 'purchase-order-report')]
    public function purchaseOrderReport(): Response
    {
        return $this->render('purchase-order-report.html.twig');
    }       
    #[Route('/purchase-report', name: 'purchase-report')]
    public function purchaseReport(): Response
    {
        return $this->render('purchase-report.html.twig');
    }       
    #[Route('/purchase-returns', name: 'purchase-returns')]
    public function purchaseReturns(): Response
    {
        return $this->render('purchase-returns.html.twig');
    }       
    #[Route('/purchase-transaction', name: 'purchase-transaction')]
    public function purchaseTransaction(): Response
    {
        return $this->render('purchase-transaction.html.twig');
    }       
    #[Route('/qrcode', name: 'qrcode')]
    public function qrcode(): Response
    {
        return $this->render('qrcode.html.twig');
    }       
    #[Route('/quotation-list', name: 'quotation-list')]
    public function quotationList(): Response
    {
        return $this->render('quotation-list.html.twig');
    }       
    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        return $this->render('register.html.twig');
    }       
    #[Route('/register-2', name: 'register-2')]
    public function register2(): Response
    {
        return $this->render('register-2.html.twig');
    }       
    #[Route('/register-3', name: 'register-3')]
    public function register3(): Response
    {
        return $this->render('register-3.html.twig');
    }       
    #[Route('/reset-password', name: 'reset-password')]
    public function resetPassword(): Response
    {
        return $this->render('reset-password.html.twig');
    }       
    #[Route('/reset-password-2', name: 'reset-password-2')]
    public function resetPassword2(): Response
    {
        return $this->render('reset-password-2.html.twig');
    }       
    #[Route('/reset-password-3', name: 'reset-password-3')]
    public function resetPassword3(): Response
    {
        return $this->render('reset-password-3.html.twig');
    }       
    #[Route('/reviews', name: 'reviews')]
    public function reviews(): Response
    {
        return $this->render('reviews.html.twig');
    }       
    #[Route('/roles-permissions', name: 'roles-permissions')]
    public function rolesPermissions(): Response
    {
        return $this->render('roles-permissions.html.twig');
    }       
    #[Route('/sales-dashboard', name: 'sales-dashboard')]
    public function salesDashboard(): Response
    {
        return $this->render('sales-dashboard.html.twig');
    }       
    #[Route('/sales-list', name: 'sales-list')]
    public function salesList(): Response
    {
        return $this->render('sales-list.html.twig');
    }       
    #[Route('/sales-report', name: 'sales-report')]
    public function salesReport(): Response
    {
        return $this->render('sales-report.html.twig');
    }       
    #[Route('/sales-returns', name: 'sales-returns')]
    public function salesReturns(): Response
    {
        return $this->render('sales-returns.html.twig');
    }       
    #[Route('/sales-tax', name: 'sales-tax')]
    public function salesTax(): Response
    {
        return $this->render('sales-tax.html.twig');
    }       
    #[Route('/search-list', name: 'search-list')]
    public function searchList(): Response
    {
        return $this->render('search-list.html.twig');
    }       
    #[Route('/security-settings', name: 'security-settings')]
    public function securitySettings(): Response
    {
        return $this->render('security-settings.html.twig');
    }       
    #[Route('/shift', name: 'shift')]
    public function shift(): Response
    {
        return $this->render('shift.html.twig');
    }       
    #[Route('/signatures', name: 'signatures')]
    public function signatures(): Response
    {
        return $this->render('signatures.html.twig');
    }       
    #[Route('/signin', name: 'signin')]
    public function signin(): Response
    {
        return $this->render('signin.html.twig');
    }       
    #[Route('/signin-2', name: 'signin-2')]
    public function signin2(): Response
    {
        return $this->render('signin-2.html.twig');
    }       
    #[Route('/signin-3', name: 'signin-3')]
    public function signin3(): Response
    {
        return $this->render('signin-3.html.twig');
    }       
    #[Route('/sms-gateway', name: 'sms-gateway')]
    public function smsGateway(): Response
    {
        return $this->render('sms-gateway.html.twig');
    }       
    #[Route('/sms-settings', name: 'sms-settings')]
    public function smsSettings(): Response
    {
        return $this->render('sms-settings.html.twig');
    }       
    #[Route('/sms-templates', name: 'sms-templates')]
    public function smsTemplates(): Response
    {
        return $this->render('sms-templates.html.twig');
    }       
    #[Route('/social-authentication', name: 'social-authentication')]
    public function socialAuthentication(): Response
    {
        return $this->render('social-authentication.html.twig');
    }       
    #[Route('/social-feed', name: 'social-feed')]
    public function socialFeed(): Response
    {
        return $this->render('social-feed.html.twig');
    }    
    #[Route('/sold-stock', name: 'sold-stock')]
    public function soldStock(): Response
    {
        return $this->render('sold-stock.html.twig');
    }     
    #[Route('/states', name: 'states')]
    public function states(): Response
    {
        return $this->render('states.html.twig');
    }       
    #[Route('/stock-adjustment', name: 'stock-adjustment')]
    public function stockAdjustment(): Response
    {
        return $this->render('stock-adjustment.html.twig');
    }       
    #[Route('/stock-history', name: 'stock-history')]
    public function stockHistory(): Response
    {
        return $this->render('stock-history.html.twig');
    }       
    #[Route('/stock-transfer', name: 'stock-transfer')]
    public function stockTransfer(): Response
    {
        return $this->render('stock-transfer.html.twig');
    }       
    #[Route('/storage-settings', name: 'storage-settings')]
    public function storageSettings(): Response
    {
        return $this->render('storage-settings.html.twig');
    }       
    #[Route('/store-list', name: 'store-list')]
    public function storeList(): Response
    {
        return $this->render('store-list.html.twig');
    }       
    #[Route('/sub-categories', name: 'sub-categories')]
    public function subCategories(): Response
    {
        return $this->render('sub-categories.html.twig');
    }     
    #[Route('/subscription', name: 'subscription')]
    public function subscription(): Response
    {
        return $this->render('subscription.html.twig');
    } 
    #[Route('/success', name: 'success')]
    public function success(): Response
    {
        return $this->render('success.html.twig');
    }       
    #[Route('/success-2', name: 'success-2')]
    public function success2(): Response
    {
        return $this->render('success-2.html.twig');
    }       
    #[Route('/success-3', name: 'success-3')]
    public function success3(): Response
    {
        return $this->render('success-3.html.twig');
    }       
    #[Route('/supplier-due-report', name: 'supplier-due-report')]
    public function supplierDueReport(): Response
    {
        return $this->render('supplier-due-report.html.twig');
    }       
    #[Route('/supplier-report', name: 'supplier-report')]
    public function supplierReport(): Response
    {
        return $this->render('supplier-report.html.twig');
    }       
    #[Route('/suppliers', name: 'suppliers')]
    public function suppliers(): Response
    {
        return $this->render('suppliers.html.twig');
    }       
    #[Route('/system-settings', name: 'system-settings')]
    public function systemSettings(): Response
    {
        return $this->render('system-settings.html.twig');
    }       
    #[Route('/tables-basic', name: 'tables-basic')]
    public function tablesBasic(): Response
    {
        return $this->render('tables-basic.html.twig');
    }       
    #[Route('/tax-rates', name: 'tax-rates')]
    public function taxRates(): Response
    {
        return $this->render('tax-rates.html.twig');
    }       
    #[Route('/tax-reports', name: 'tax-reports')]
    public function taxReports(): Response
    {
        return $this->render('tax-reports.html.twig');
    }       
    #[Route('/testimonials', name: 'testimonials')]
    public function testimonials(): Response
    {
        return $this->render('testimonials.html.twig');
    }       
    #[Route('/todo', name: 'todo')]
    public function todo(): Response
    {
        return $this->render('todo.html.twig');
    }       
    #[Route('/todo-list', name: 'todo-list')]
    public function todoList(): Response
    {
        return $this->render('todo-list.html.twig');
    }       
    #[Route('/trial-balance', name: 'trial-balance')]
    public function trialBalance(): Response
    {
        return $this->render('trial-balance.html.twig');
    }  
    #[Route('/two-step-verification', name: 'two-step-verification')]
    public function twoStepVerification(): Response
    {
        return $this->render('two-step-verification.html.twig');
    }       
    #[Route('/two-step-verification-2', name: 'two-step-verification-2')]
    public function twoStepVerification2(): Response
    {
        return $this->render('two-step-verification-2.html.twig');
    }       
    #[Route('/two-step-verification-3', name: 'two-step-verification-3')]
    public function twoStepVerification3(): Response
    {
        return $this->render('two-step-verification-3.html.twig');
    }       
    #[Route('/ui-accordion', name: 'ui-accordion')]
    public function uiAccordion(): Response
    {
        return $this->render('ui-accordion.html.twig');
    }       
    #[Route('/ui-alerts', name: 'ui-alerts')]
    public function uiAlerts(): Response
    {
        return $this->render('ui-alerts.html.twig');
    }       
    #[Route('/ui-avatar', name: 'ui-avatar')]
    public function uiAvatar(): Response
    {
        return $this->render('ui-avatar.html.twig');
    }       
    #[Route('/ui-badges', name: 'ui-badges')]
    public function uiBadges(): Response
    {
        return $this->render('ui-badges.html.twig');
    }       
    #[Route('/ui-borders', name: 'ui-borders')]
    public function uiBorders(): Response
    {
        return $this->render('ui-borders.html.twig');
    }       
    #[Route('/ui-breadcrumb', name: 'ui-breadcrumb')]
    public function uiBreadcrumb(): Response
    {
        return $this->render('ui-breadcrumb.html.twig');
    }       
    #[Route('/ui-buttons', name: 'ui-buttons')]
    public function uiButtons(): Response
    {
        return $this->render('ui-buttons.html.twig');
    }       
    #[Route('/ui-buttons-group', name: 'ui-buttons-group')]
    public function uiButtonsGroup(): Response
    {
        return $this->render('ui-buttons-group.html.twig');
    }       
    #[Route('/ui-cards', name: 'ui-cards')]
    public function uiCards(): Response
    {
        return $this->render('ui-cards.html.twig');
    }       
    #[Route('/ui-carousel', name: 'ui-carousel')]
    public function uiCarousel(): Response
    {
        return $this->render('ui-carousel.html.twig');
    }       
    #[Route('/ui-clipboard', name: 'ui-clipboard')]
    public function uiClipboard(): Response
    {
        return $this->render('ui-clipboard.html.twig');
    }       
    #[Route('/ui-colors', name: 'ui-colors')]
    public function uiColors(): Response
    {
        return $this->render('ui-colors.html.twig');
    }       
    #[Route('/ui-counter', name: 'ui-counter')]
    public function uiCounter(): Response
    {
        return $this->render('ui-counter.html.twig');
    }       
    #[Route('/ui-drag-drop', name: 'ui-drag-drop')]
    public function uiDragDrop(): Response
    {
        return $this->render('ui-drag-drop.html.twig');
    }       
    #[Route('/ui-dropdowns', name: 'ui-dropdowns')]
    public function uiDropdowns(): Response
    {
        return $this->render('ui-dropdowns.html.twig');
    }       
    #[Route('/ui-grid', name: 'ui-grid')]
    public function uiGrid(): Response
    {
        return $this->render('ui-grid.html.twig');
    }       
    #[Route('/ui-images', name: 'ui-images')]
    public function uiImages(): Response
    {
        return $this->render('ui-images.html.twig');
    }       
    #[Route('/ui-lightbox', name: 'ui-lightbox')]
    public function uiLightbox(): Response
    {
        return $this->render('ui-lightbox.html.twig');
    }       
    #[Route('/ui-media', name: 'ui-media')]
    public function uiMedia(): Response
    {
        return $this->render('ui-media.html.twig');
    }       
    #[Route('/ui-modals', name: 'ui-modals')]
    public function uiModals(): Response
    {
        return $this->render('ui-modals.html.twig');
    }       
    #[Route('/ui-nav-tabs', name: 'ui-nav-tabs')]
    public function uiNavTabs(): Response
    {
        return $this->render('ui-nav-tabs.html.twig');
    }       
    #[Route('/ui-offcanvas', name: 'ui-offcanvas')]
    public function uiOffcanvas(): Response
    {
        return $this->render('ui-offcanvas.html.twig');
    }       
    #[Route('/ui-pagination', name: 'ui-pagination')]
    public function uiPagination(): Response
    {
        return $this->render('ui-pagination.html.twig');
    }       
    #[Route('/ui-placeholders', name: 'ui-placeholders')]
    public function uiPlaceholders(): Response
    {
        return $this->render('ui-placeholders.html.twig');
    }       
    #[Route('/ui-popovers', name: 'ui-popovers')]
    public function uiPopovers(): Response
    {
        return $this->render('ui-popovers.html.twig');
    }       
    #[Route('/ui-progress', name: 'ui-progress')]
    public function uiProgress(): Response
    {
        return $this->render('ui-progress.html.twig');
    }       
    #[Route('/ui-rangeslider', name: 'ui-rangeslider')]
    public function uiRangeslider(): Response
    {
        return $this->render('ui-rangeslider.html.twig');
    }       
    #[Route('/ui-rating', name: 'ui-rating')]
    public function uiRating(): Response
    {
        return $this->render('ui-rating.html.twig');
    }       
    #[Route('/ui-ribbon', name: 'ui-ribbon')]
    public function uiRibbon(): Response
    {
        return $this->render('ui-ribbon.html.twig');
    }       
    #[Route('/ui-scrollbar', name: 'ui-scrollbar')]
    public function uiScrollbar(): Response
    {
        return $this->render('ui-scrollbar.html.twig');
    }     
    #[Route('/ui-sortable', name: 'ui-sortable')]
    public function uiSortable(): Response
    {
        return $this->render('ui-sortable.html.twig');
    }     
    #[Route('/ui-spinner', name: 'ui-spinner')]
    public function uiSpinner(): Response
    {
        return $this->render('ui-spinner.html.twig');
    }       
    #[Route('/ui-stickynote', name: 'ui-stickynote')]
    public function uiStickynote(): Response
    {
        return $this->render('ui-stickynote.html.twig');
    }       
    #[Route('/ui-sweetalerts', name: 'ui-sweetalerts')]
    public function uiSweetalerts(): Response
    {
        return $this->render('ui-sweetalerts.html.twig');
    }   
    #[Route('/ui-swiperjs', name: 'ui-swiperjs')]
    public function uiSwiperjs(): Response
    {
        return $this->render('ui-swiperjs.html.twig');
    }        
    #[Route('/ui-text-editor', name: 'ui-text-editor')]
    public function uiTextEditor(): Response
    {
        return $this->render('ui-text-editor.html.twig');
    }       
    #[Route('/ui-timeline', name: 'ui-timeline')]
    public function uiTimeline(): Response
    {
        return $this->render('ui-timeline.html.twig');
    }       
    #[Route('/ui-toasts', name: 'ui-toasts')]
    public function uiToasts(): Response
    {
        return $this->render('ui-toasts.html.twig');
    }       
    #[Route('/ui-tooltips', name: 'ui-tooltips')]
    public function uiTooltips(): Response
    {
        return $this->render('ui-tooltips.html.twig');
    }       
    #[Route('/ui-typography', name: 'ui-typography')]
    public function uiTypography(): Response
    {
        return $this->render('ui-typography.html.twig');
    }       
    #[Route('/ui-video', name: 'ui-video')]
    public function uiVideo(): Response
    {
        return $this->render('ui-video.html.twig');
    }       
    #[Route('/under-maintenance', name: 'under-maintenance')]
    public function underMaintenance(): Response
    {
        return $this->render('under-maintenance.html.twig');
    }       
    #[Route('/units', name: 'units')]
    public function units(): Response
    {
        return $this->render('units.html.twig');
    }       
    #[Route('/users', name: 'users')]
    public function users(): Response
    {
        return $this->render('users.html.twig');
    }       

    #[Route('/varriant-attributes', name: 'varriant-attributes')]
    public function varriantAttributes(): Response
    {
        return $this->render('varriant-attributes.html.twig');
    }       

    #[Route('/video-call', name: 'video-call')]
    public function videoCall(): Response
    {
        return $this->render('video-call.html.twig');
    }       
    #[Route('/warehouse', name: 'warehouse')]
    public function warehouse(): Response
    {
        return $this->render('warehouse.html.twig');
    }       
    #[Route('/warranty', name: 'warranty')]
    public function warranty(): Response
    {
        return $this->render('warranty.html.twig');
    }       
    #[Route('/wishlist', name: 'wishlist')]
    public function wishlist(): Response
    {
        return $this->render('wishlist.html.twig');
    }
    



    #[Route('/{path}')]
    public function root($path)
    {
        if ($this->loader->exists($path.'.html.twig')) {
            if ($path == '/' || $path == 'home' || $path == 'index') {
                return $this->render('index.html.twig');
            }
            return $this->render($path.'.html.twig');
        }
        throw $this->createNotFoundException();
    }
}
