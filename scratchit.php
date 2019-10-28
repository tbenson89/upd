<?php
namespace BackwardGraphics\HomeSlider\Block;
class SlideEditor extends \Magento\Framework\View\Element\Template {

    private $_slideCollection;
    protected $_objectManager;
    protected $connection;
    protected $_resource;
    protected $_data;
    protected $pageConfig;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Framework\App\Resource $resource,
        \Magento\Framework\ObjectManagerInterface $objectManager,
        \BackwardGraphics\HomeSlider\Model\SlideFactory $slideCollection,
        array $data = []
    ) {
        $this->_resource = $resource;
        $this->_objectManager = $objectManager;
        $this->_slideCollection = $slideCollection;
        parent::__construct($context , $slideCollection , $data);
    }

    public function _prepareLayout()
    {
        $this->pageConfig->getTitle()->set(__('Slider Editor'));

        return parent::_prepareLayout();
    }

    protected function getConnection()
    {
        if (!$this->connection) {
            $this->connection = $this->_resource->getConnection('core_write');
        }

        return $this->connection;
    }


    public function sliderDataWriter() {
        $post = $this->getRequest()->getPostValue();
        $model = $this->_data->create();

        if (!empty($post)) {
            // Retrieve form data
            $name           = $post['name'];
            $slide_image    = $post['slide_image'];
            $caption        = $post['caption'];
            $widget         = $post['widget'];

            // Update DB with POST data
            $data=array($name , $slide_image , $caption , $widget);
            $id = $post['slide_id'];
            if ($id) {
                $model->load($id);
            }
            $model->setData($data);
            $model->save();

            $this->messageManager->addSuccessMessage('Slider Updated!');

            $resultRedirect = $this->resultFactory->create(ResultFactory::TYPE_REDIRECT);
            $resultRedirect->setUrl($this->_redirect->getRefererUrl());

            return $resultRedirect;
        }
        $this->_data->loadLayout();
        $this->_data->renderLayout();
    }
}